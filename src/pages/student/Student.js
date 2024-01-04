import React from "react";
import "./Student.sass";
import ContentBox from "../../components/common/ContentBox";

function Student() {
  return (
    <div className="container">
      <ContentBox title="Student Details" child="Message" />

      <ContentBox title="Existing Students" child="Message" />
    </div>
  );
}

export default Student;
