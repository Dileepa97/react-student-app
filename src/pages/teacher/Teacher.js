import React from "react";
import ContentBox from "../../components/common/ContentBox";
import TeacherDetails from "./components/TeacherDetails";
import "./Teacher.sass";

function Teacher() {
  const TeacherDetailsComponent = () => <TeacherDetails />;

  return (
    <div className="container">
      <ContentBox title="Student Details" child={<TeacherDetailsComponent />} />

      <ContentBox title="Existing Teachers" child="Message" />
    </div>
  );
}

export default Teacher;
