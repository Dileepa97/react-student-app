import React from "react";
import { Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  setButtonGruopMode,
  resetButtonGruopMode,
} from "../../redux/actions/buttonGroupActions";

function CustomButtonGroup({ onCancel, onSave, onSaveEdit, onDelete }) {
  const dispatch = useDispatch();
  const buttonGroupData = useSelector((state) => state.buttonGroup);

  const handleEditClick = () => {
    dispatch(setButtonGruopMode("isEditEnabledMode", true));
    dispatch(setButtonGruopMode("isEditDisabledMode", false));
  };

  const handleCancelClick = () => {
    dispatch(resetButtonGruopMode());

    if (onCancel) {
      onCancel();
    }
  };

  const handleSaveClick = () => {
    if (onSave) {
      onSave();
    }
  };

  const handleSaveEditClick = () => {
    if (onSaveEdit) {
      onSaveEdit();
    }
  };

  const handleDeleteClick = () => {
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <div className="button-group-col">
      {buttonGroupData.isSaveMode && (
        <Button className="button" color="success" onClick={handleSaveClick}>
          Save
        </Button>
      )}
      {buttonGroupData.isEditDisabledMode && (
        <Button className="button" onClick={handleEditClick}>
          Edit
        </Button>
      )}
      {buttonGroupData.isEditEnabledMode && (
        <Button
          className="button"
          color="success"
          onClick={handleSaveEditClick}
        >
          Save Edit
        </Button>
      )}
      {buttonGroupData.isEditDisabledMode && (
        <Button className="button" color="danger" onClick={handleDeleteClick}>
          Delete
        </Button>
      )}
      {(buttonGroupData.isSaveMode ||
        buttonGroupData.isEditDisabledMode ||
        buttonGroupData.isEditEnabledMode) && (
        <Button className="button" outline onClick={handleCancelClick}>
          Cancel
        </Button>
      )}
    </div>
  );
}

export default CustomButtonGroup;
