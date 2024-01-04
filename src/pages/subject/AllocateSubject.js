import React from "react";
import ContentBox from "../../components/common/ContentBox";
import AllocateTeacherDetails from "../teacher/components/AllocateTeacherDetails";
import AllocatedSubjects from "./components/AllocatedSubjects";

function AllocateSubject() {
  const TeacherDetailsComponent = () => <AllocateTeacherDetails />;
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
