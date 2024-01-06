import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import ContentBox from "../../components/common/ContentBox";
import TeacherDetails from "./components/TeacherDetails";
import TeacherApi from "../../api/TeacherApi";
import ExistingTeachers from "./components/ExistingTeachers";
import "./Teacher.sass";

function Teacher() {
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

  const TeacherDetailsComponent = () => <TeacherDetails />;
  const ExistingTeachersComponent = () => <ExistingTeachers data={teachers} />;

  return (
    <div className="container">
      <ContentBox title="Teacher Details" child={<TeacherDetailsComponent />} />

      <ContentBox
        title="Existing Teachers"
        child={
          teachers.length > 0 ? (
            <ExistingTeachersComponent />
          ) : (
            <Label>There is no data available to display!</Label>
          )
        }
      />
    </div>
  );
}

export default Teacher;
