import React from "react";
import { updateForm } from "../../../redux/actions/formActions";
import { setButtonGruopMode } from "../../../redux/actions/buttonGroupActions";
import { useDispatch } from "react-redux";
import CustomTable from "../../../components/common/CustomTable";

function ExistingSubjects({ data }) {
  const dispatch = useDispatch();

  const handleRowClick = (item) => {
    dispatch(
      updateForm("subjectForm", {
        subjectName: item.name,
        subjectId: item.id,
      })
    );
    dispatch(setButtonGruopMode("isEditDisabledMode", true));
    dispatch(setButtonGruopMode("isSaveMode", false));
  };

  const columnsToDisplay = [{ key: "name", header: "Name" }];

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

export default ExistingSubjects;
