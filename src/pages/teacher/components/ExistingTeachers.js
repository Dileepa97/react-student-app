import React from "react";
import { updateForm } from "../../../redux/actions/formActions";
import { setButtonGruopMode } from "../../../redux/actions/buttonGroupActions";
import { useDispatch } from "react-redux";
import CustomTable from "../../../components/common/CustomTable";

function ExistingTeachers({ data }) {
  const dispatch = useDispatch();

  const handleRowClick = (item) => {
    dispatch(
      updateForm("teacherForm", {
        firstName: item.firstName,
        lastName: item.lastName,
        contactNo: item.contactNo,
        email: item.email,
        id: item.id,
      })
    );
    dispatch(setButtonGruopMode("isEditDisabledMode", true));
    dispatch(setButtonGruopMode("isSaveMode", false));
  };

  const columnsToDisplay = [
    { key: "firstName", header: "First Name" },
    { key: "lastName", header: "Last Name" },
    { key: "contactNo", header: "Contact No" },
    { key: "email", header: "Email" },
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

export default ExistingTeachers;
