import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";
import StudentApi from "../../../api/StudentApi";
import { updateForm } from "../../../redux/actions/formActions";

function ReportStudentDetails() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.studentReportForm);

  const studentApi = new StudentApi();

  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState({});
  const [selectedStudentId, setSelectedStudentId] = useState("");

  useEffect(() => {
    async function fetchStudnets() {
      try {
        const data = await studentApi.getAllStudents();

        if (data.length > 0) {
          data.forEach((student) => {
            const bDay = new Date(student.dob);
            student.dob = bDay.toISOString().slice(0, 10);
          });
        }

        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    }

    fetchStudnets();
  }, []);

  const handleChange = (e) => {
    setSelectedStudentId(e.target.value);

    const student = students.find((student) => student.id === e.target.value);
    setSelectedStudent(student);

    dispatch(
      updateForm("studentReportForm", {
        studentId: e.target.value,
        classRoomId: student?.classRoomId || "",
      })
    );
  };

  return (
    <>
      <div>
        <Col md={6}>
          <FormGroup>
            <Label for="student">Student *</Label>
            <Input
              id="student"
              name="studentId"
              type="select"
              required
              value={formData.studentId}
              onChange={handleChange}
            >
              <option value="">Please select</option>
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.firstName} {student.lastName}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Col>

        {selectedStudentId && selectedStudent && (
          <div>
            <div
              style={{ borderBottom: "1px solid grey", margin: "20px 0 " }}
            ></div>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="classRoom">Class Room </Label>
                  <Input
                    id="classRoom"
                    name="classRoom"
                    type="text"
                    disabled
                    value={selectedStudent.classRoom.name}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="text"
                    disabled
                    value={selectedStudent.email}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="contactPerson">Contact Person</Label>
                  <Input
                    id="contactPerson"
                    name="contactPerson"
                    type="text"
                    disabled
                    value={selectedStudent.contactPerson}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="contactNo">Contact No</Label>
                  <Input
                    id="contactNo"
                    name="contactNo"
                    type="text"
                    disabled
                    value={selectedStudent.contactNo}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="birthDate">Date of Birth</Label>
                  <Input
                    id="birthDate"
                    name="birthDate"
                    type="text"
                    disabled
                    value={selectedStudent.dob}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="age">Age</Label>
                  <Input
                    id="age"
                    name="age"
                    type="text"
                    disabled
                    value={selectedStudent.age}
                  />
                </FormGroup>
              </Col>
            </Row>
          </div>
        )}
      </div>
    </>
  );
}

export default ReportStudentDetails;
