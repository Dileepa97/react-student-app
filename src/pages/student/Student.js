import React from "react";
import "./Student.sass";
import ContentBox from "../../components/common/ContentBox";
import StudentDetails from "./components/StudentDetails";

function Student() {
  const StudentDetailsComponent = () => <StudentDetails />;

  return (
    <div className="container">
      <ContentBox title="Student Details" child={<StudentDetailsComponent />} />

      <ContentBox title="Existing Students" child="Message" />
    </div>
  );
}

export default Student;
