import React from "react";
import ContentBox from "../../components/common/ContentBox";
import SubTeacherDetails from "./components/SubTeacherDetails";
import AllocatedSubjects from "./components/AllocatedSubjects";

function AllocateSubject() {
  const TeacherDetailsComponent = () => <SubTeacherDetails />;
  const AllocatedSubjectsComponent = () => <AllocatedSubjects />;

  return (
    <div className="container">
      <ContentBox title="Teacher Details" child={<TeacherDetailsComponent />} />

      <ContentBox
        title="Allocated Subjects"
        child={<AllocatedSubjectsComponent />}
      />
    </div>
  );
}

export default AllocateSubject;
