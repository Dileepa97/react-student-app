import React, { useEffect, useState } from "react";
import { Row, Col, Label, Input, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  updateForm,
  resetForm,
  validateForm,
} from "../../../redux/actions/formActions";
import TeacherApi from "../../../api/TeacherApi";
import CustomTable from "../../../components/common/CustomTable";

function AllocatedSubjects() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.subjectAllocationForm);

  const teacherApi = new TeacherApi();

  const [notAllocatedSubjects, setNotAllocatedSubjects] = useState([]);
  const [allocatedSubjects, setAllocatedSubjects] = useState([]);
  const [isRowSelected, setIsRowSelected] = useState(false);
  const [rowSubject, setRowSubject] = useState({});

  useEffect(() => {
    async function fetchNotAllocatedSubjects() {
      try {
        const data = await teacherApi.getnotAllocatedSubjectsByTeacherId(
          formData.teacherId
        );
        setNotAllocatedSubjects(data);
      } catch (error) {
        console.error("Error fetching not allocated subjects:", error);
      }
    }

    async function fetchAllocatedSubjects() {
      try {
        const data = await teacherApi.getAllocatedSubjectsByTeacherId(
          formData.teacherId
        );
        setAllocatedSubjects(data);
      } catch (error) {
        console.error("Error fetching allocated subjects:", error);
      }
    }

    if (formData.teacherId !== "") {
      fetchNotAllocatedSubjects();
      fetchAllocatedSubjects();
    }
  }, [formData.teacherId]);

  const handleChange = (e) => {
    dispatch(
      updateForm("subjectAllocationForm", { [e.target.name]: e.target.value })
    );
  };

  const handleAllocate = async () => {
    try {
      const errors = {};

      if (formData.subjectId === "") {
        errors.subjectId = "Please select a subject";
      }

      dispatch(validateForm("subjectAllocationForm", errors));

      if (Object.keys(errors).length === 0) {
        const allocationData = {
          teacherId: formData.teacherId,
          subjectId: formData.subjectId,
        };

        await teacherApi.allocateSubject(allocationData);
        dispatch(resetForm("subjectAllocationForm"));
        window.location.reload();
      }
    } catch (error) {
      console.error("Error allocating a subject:", error);
    }
  };

  const handleRowClick = (item) => {
    setIsRowSelected(true);
    setRowSubject(item);
  };

  const handleCancel = () => {
    setIsRowSelected(false);
    setRowSubject({});
  };

  const handleDeallocate = async () => {
    try {
      if (rowSubject) {
        await teacherApi.deallocateSubject(formData.teacherId, rowSubject.id);
        dispatch(resetForm("subjectAllocationForm"));
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deallocating a subject:", error);
    }
  };

  const columnsToDisplay = [{ key: "name", header: "Name" }];

  return (
    <>
      {formData.teacherId !== "" ? (
        <div>
          <Row>
            {!isRowSelected ? (
              <>
                <Col md={2}>
                  <Label for="subject">Subject *</Label>
                </Col>
                <Col md={6}>
                  <Input
                    id="subject"
                    name="subjectId"
                    type="select"
                    required
                    value={formData?.subjectId}
                    onChange={handleChange}
                    invalid={!!formData.errors.subjectId}
                  >
                    <option value="">Please select</option>
                    {notAllocatedSubjects.map((subject) => (
                      <option key={subject.id} value={subject.id}>
                        {subject.name}
                      </option>
                    ))}
                  </Input>
                  {formData.errors.subjectId && (
                    <div className="invalid-input">
                      {formData.errors.subjectId}
                    </div>
                  )}
                </Col>
                <Col md={2}></Col>
                <Col md={2}>
                  <div className="button-group-col">
                    <Button
                      className="button"
                      color="success"
                      onClick={handleAllocate}
                    >
                      Allocate
                    </Button>
                  </div>
                </Col>
              </>
            ) : (
              <>
                <Col md={1}></Col>
                <Col md={6} style={{ textAlign: "center" }}>
                  <Label>
                    <b>{rowSubject.name}</b> Selected. Do you want to
                    deallocate?
                  </Label>
                </Col>
                <Col md={4}>
                  <div className="button-group-col">
                    <Button
                      className="button"
                      color="danger"
                      onClick={handleDeallocate}
                    >
                      Deallocate
                    </Button>
                    <Button className="button" outline onClick={handleCancel}>
                      Cancel
                    </Button>
                  </div>
                </Col>
              </>
            )}
          </Row>

          <div
            style={{ borderBottom: "1px solid gray", margin: "20px 0 0 0" }}
          ></div>

          <div>
            {allocatedSubjects.length > 0 ? (
              <div>
                <CustomTable
                  data={allocatedSubjects}
                  columnsToShow={columnsToDisplay}
                  onRowClick={handleRowClick}
                />
                <Label>* Select a subject on the list to deallocate.</Label>
              </div>
            ) : (
              <Label style={{ marginTop: "50px" }}>
                There is no data available to display! Please allocate a
                subject.
              </Label>
            )}
          </div>
        </div>
      ) : (
        <Label>
          There is no data available to display! Please select a teacher.
        </Label>
      )}
    </>
  );
}

export default AllocatedSubjects;
