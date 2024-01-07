import React from "react";
import { updateForm } from "../../../redux/actions/formActions";
import { setButtonGruopMode } from "../../../redux/actions/buttonGroupActions";
import { useDispatch } from "react-redux";
import CustomTable from "../../../components/common/CustomTable";

function ExistingStudents({ data }) {
  const dispatch = useDispatch();

  const handleRowClick = (item) => {
    dispatch(
      updateForm("studentForm", {
        firstName: item.firstName,
        lastName: item.lastName,
        contactPerson: item.contactPerson,
        contactNo: item.contactNo,
        email: item.email,
        birthDate: item.dob,
        classRoomId: item.classRoomId,
        id: item.id,
      })
    );
    dispatch(setButtonGruopMode("isEditDisabledMode", true));
    dispatch(setButtonGruopMode("isSaveMode", false));
  };

  const columnsToDisplay = [
    { key: "firstName", header: "First Name" },
    { key: "lastName", header: "Last Name" },
    { key: "contactPerson", header: "Contact Person" },
    { key: "contactNo", header: "Contact No" },
    { key: "email", header: "Email" },
    { key: "dob", header: "Birth Date" },
    { key: "age", header: "Age" },
    { key: "classRoomName", header: "Class Room Name" },
  ];

  return (
    <div>
      <CustomTable
        data={data}
        columnsToShow={columnsToDisplay}
        onRowClick={handleRowClick}
      />
    </div>
  );
}

export default ExistingStudents;
