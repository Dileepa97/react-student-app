import React from "react";
import ContentBox from "../../components/common/ContentBox";
import SubjectDetails from "./components/SubjectDetails";
import "./Subject.sass";

function Subject() {
  const SubjectDetailsComponent = () => <SubjectDetails />;

  return (
    <div className="container">
      <ContentBox title="Subject Details" child={<SubjectDetailsComponent />} />

      <ContentBox title="Existing Subjects" child="Message" />
    </div>
  );
}

export default Subject;
