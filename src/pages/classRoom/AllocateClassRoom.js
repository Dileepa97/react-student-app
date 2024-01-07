import React from "react";
import ContentBox from "../../components/common/ContentBox";
import AllocateTeacherDetails from "../teacher/components/AllocateTeacherDetails";
import AllocatedClassRoom from "./components/AllocatedClassRoom";

function AllocateClassRoom() {
  const TeacherDetailsComponent = () => (
    <AllocateTeacherDetails formName={"classRoomAllocationForm"} />
  );
  const AllocatedClassRoomComponent = () => <AllocatedClassRoom />;

  return (
    <div className="container">
      <ContentBox title="Teacher Details" child={<TeacherDetailsComponent />} />

      <ContentBox
        title="Allocated Class Rooms"
        child={<AllocatedClassRoomComponent />}
      />
    </div>
  );
}

export default AllocateClassRoom;
