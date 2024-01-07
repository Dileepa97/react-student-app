import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import ContentBox from "../../components/common/ContentBox";
import StudentDetails from "./components/StudentDetails";
import StudentApi from "../../api/StudentApi";
import ExistingStudents from "./components/ExistingStudents";
import "./Student.sass";

function Student() {
  const studentApi = new StudentApi();

  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchStudents() {
      try {
        const data = await studentApi.getAllStudents();

        if (data.length > 0) {
          data.forEach((student) => {
            const bDay = new Date(student.dob);
            student.dob = bDay.toISOString().slice(0, 10);
            student.classRoomName = student.classRoom.name;
          });
        }

        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    }

    fetchStudents();
  }, []);

  const StudentDetailsComponent = () => <StudentDetails />;
  const ExistingStudentsComponent = () => <ExistingStudents data={students} />;

  return (
    <div className="container">
      <ContentBox title="Student Details" child={<StudentDetailsComponent />} />

      <ContentBox
        title="Existing Students"
        child={
          students.length > 0 ? (
            <ExistingStudentsComponent />
          ) : (
            <Label>There is no data available to display!</Label>
          )
        }
      />
    </div>
  );
}

export default Student;
