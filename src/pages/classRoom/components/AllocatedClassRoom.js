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

function AllocatedClassRoom() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.classRoomAllocationForm);

  const teacherApi = new TeacherApi();

  const [notAllocatedClassRooms, setNotAllocatedClassRooms] = useState([]);
  const [allocatedClassRooms, setAllocatedClassRooms] = useState([]);
  const [isRowSelected, setIsRowSelected] = useState(false);
  const [rowClassRoom, setRowClassRoom] = useState({});

  useEffect(() => {
    async function fetchNotAllocatedClassRooms() {
      try {
        const data = await teacherApi.getnotAllocatedClassRoomsByTeacherId(
          formData.teacherId
        );
        setNotAllocatedClassRooms(data);
      } catch (error) {
        console.error("Error fetching not allocated classrooms:", error);
      }
    }

    async function fetchAllocatedClassRooms() {
      try {
        const data = await teacherApi.getAllocatedClassRoomsByTeacherId(
          formData.teacherId
        );
        setAllocatedClassRooms(data);
      } catch (error) {
        console.error("Error fetching allocated classrooms:", error);
      }
    }

    if (formData.teacherId !== "") {
      fetchNotAllocatedClassRooms();
      fetchAllocatedClassRooms();
    }
  }, [formData.teacherId]);

  const handleChange = (e) => {
    dispatch(
      updateForm("classRoomAllocationForm", { [e.target.name]: e.target.value })
    );
  };

  const handleAllocate = async () => {
    try {
      const errors = {};

      if (formData.classRoomId === "") {
        errors.classRoomId = "Please select a classroom";
      }

      dispatch(validateForm("classRoomAllocationForm", errors));

      if (Object.keys(errors).length === 0) {
        const allocationData = {
          teacherId: formData.teacherId,
          classRoomId: formData.classRoomId,
        };

        await teacherApi.allocateClassRoom(allocationData);
        dispatch(resetForm("classRoomAllocationForm"));
        window.location.reload();
      }
    } catch (error) {
      console.error("Error allocating a classroom:", error);
    }
  };

  const handleRowClick = (item) => {
    setIsRowSelected(true);
    setRowClassRoom(item);
  };

  const handleCancel = () => {
    setIsRowSelected(false);
    setRowClassRoom({});
  };

  const handleDeallocate = async () => {
    try {
      if (rowClassRoom) {
        await teacherApi.deallocateClassRooms(
          formData.teacherId,
          rowClassRoom.id
        );
        dispatch(resetForm("classRoomAllocationForm"));
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deallocating a classRoom:", error);
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
                  <Label for="classRoom">Class Room *</Label>
                </Col>
                <Col md={6}>
                  <Input
                    id="classRoom"
                    name="classRoomId"
                    type="select"
                    required
                    value={formData?.classRoomId}
                    onChange={handleChange}
                    invalid={!!formData.errors.classRoomId}
                  >
                    <option value="">Please select</option>
                    {notAllocatedClassRooms.map((classRoom) => (
                      <option key={classRoom.id} value={classRoom.id}>
                        {classRoom.name}
                      </option>
                    ))}
                  </Input>
                  {formData.errors.classRoomId && (
                    <div className="invalid-input">
                      {formData.errors.classRoomId}
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
                    <b>{rowClassRoom.name}</b> Selected. Do you want to
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
            {allocatedClassRooms.length > 0 ? (
              <div>
                <CustomTable
                  data={allocatedClassRooms}
                  columnsToShow={columnsToDisplay}
                  onRowClick={handleRowClick}
                />
                <Label>* Select a classroom on the list to deallocate.</Label>
              </div>
            ) : (
              <Label style={{ marginTop: "50px" }}>
                There is no data available to display! Please allocate a
                classroom.
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

export default AllocatedClassRoom;
