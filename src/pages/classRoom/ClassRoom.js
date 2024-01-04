import React from "react";
import ContentBox from "../../components/common/ContentBox";
import ClassRoomDetails from "./components/ClassRoomDetails";
import "./ClassRoom.sass";

function ClassRoom() {
  const ClassRoomDetailsComponent = () => <ClassRoomDetails />;
  return (
    <div className="container">
      <ContentBox
        title="Class Room Details"
        child={<ClassRoomDetailsComponent />}
      />

      <ContentBox title="Existing Class Rooms" child="Message" />
    </div>
  );
}

export default ClassRoom;
