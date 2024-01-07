import React, { useEffect, useState } from "react";
import { Row, Col, Label, Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateForm } from "../../../redux/actions/formActions";
import TeacherApi from "../../../api/TeacherApi";

function AllocateTeacherDetails({ formName }) {
  const dispatch = useDispatch();

  const formData = useSelector((state) => {
    if (formName === "classRoomAllocationForm") {
      return state.form.classRoomAllocationForm;
    } else if (formName === "subjectAllocationForm") {
      return state.form.subjectAllocationForm;
    }
    return null;
  });

  const teacherApi = new TeacherApi();

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    async function fetchTeachers() {
      try {
        const data = await teacherApi.getAllTeachers();
        setTeachers(data);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    }

    fetchTeachers();
  }, []);

  const handleChange = (e) => {
    dispatch(updateForm(formName, { [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Row>
        <Col md={2}>
          <Label for="teacher">Teacher *</Label>
        </Col>
        <Col md={6}>
          <Input
            id="teacher"
            name="teacherId"
            type="select"
            required
            value={formData?.teacherId}
            onChange={handleChange}
          >
            <option value="">Please select</option>
            {teachers.map((teacher) => (
              <option key={teacher.id} value={teacher.id}>
                {teacher.firstName} {teacher.lastName}
              </option>
            ))}
          </Input>
        </Col>
      </Row>
    </>
  );
}

export default AllocateTeacherDetails;
