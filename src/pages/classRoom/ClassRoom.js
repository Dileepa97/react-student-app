import React, { useEffect, useState } from "react";
import { Label } from "reactstrap";
import ContentBox from "../../components/common/ContentBox";
import ClassRoomDetails from "./components/ClassRoomDetails";
import ExistingClassRooms from "./components/ExistingClassRooms";
import ClassRoomApi from "../../api/ClassRoomApi";
import "./ClassRoom.sass";

function ClassRoom() {
  const classRoomApi = new ClassRoomApi();

  const [classRooms, setClassRooms] = useState([]);

  useEffect(() => {
    async function fetchClassRooms() {
      try {
        const data = await classRoomApi.getAllClassRooms();
        setClassRooms(data);
      } catch (error) {
        console.error("Error fetching classrooms:", error);
      }
    }

    fetchClassRooms();
  });

  const ClassRoomDetailsComponent = () => <ClassRoomDetails />;
  const ExistingClassRoomsComponent = () => (
    <ExistingClassRooms data={classRooms} />
  );

  return (
    <div className="container">
      <ContentBox
        title="Class Room Details"
        child={<ClassRoomDetailsComponent />}
      />
      <ContentBox
        title="Existing Class Rooms"
        child={
          classRooms.length > 0 ? (
            <ExistingClassRoomsComponent />
          ) : (
            <Label>There is no data available to display!</Label>
          )
        }
      />
    </div>
  );
}

export default ClassRoom;
