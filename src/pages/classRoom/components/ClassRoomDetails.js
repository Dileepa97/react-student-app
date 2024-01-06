import React from "react";
import { Form, Row, Col, FormGroup, Label, Input } from "reactstrap";
import {
  updateForm,
  resetForm,
  validateForm,
} from "../../../redux/actions/formActions";
import { useSelector, useDispatch } from "react-redux";
import ClassRoomApi from "../../../api/ClassRoomApi";
import CustomButtonGroup from "../../../components/common/CustomButtonGroup";

function ClassRoomDetails() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.classRoomForm);
  const buttonGroupData = useSelector((state) => state.buttonGroup);

  const classRoomApi = new ClassRoomApi();

  const handleChange = (e) => {
    dispatch(updateForm("classRoomForm", { [e.target.name]: e.target.value }));
  };

  const handleCancel = () => {
    dispatch(resetForm("classRoomForm"));
  };

  const handleSave = async () => {
    try {
      const errors = validate(formData);
      dispatch(validateForm("classRoomForm", errors));

      if (Object.keys(errors).length === 0) {
        const classRoomData = {
          name: formData.classRoomName,
        };

        await classRoomApi.createClassRoom(classRoomData);
        dispatch(resetForm("classRoomForm"));
        window.location.reload();
      }
    } catch (error) {
      console.error("Error creating classroom:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await classRoomApi.deleteClassRoom(formData.classRoomId);
      dispatch(resetForm("classRoomForm"));
      window.location.reload();
    } catch (error) {
      console.error("Error creating classroom:", error);
    }
  };

  const handleSaveEdited = async () => {
    try {
      const errors = validate(formData);
      dispatch(validateForm("classRoomForm", errors));

      if (Object.keys(errors).length === 0) {
        const classRoomData = {
          name: formData.classRoomName,
        };

        await classRoomApi.updateClassRoom(formData.classRoomId, classRoomData);
        dispatch(resetForm("classRoomForm"));
        window.location.reload();
      }
    } catch (error) {
      console.error("Error updating classroom:", error);
    }
  };

  const validate = (formData) => {
    const errors = {};

    if (formData.classRoomName === "") {
      errors.classRoomName = "Classroom name is required";
    } else if (formData.classRoomName.length > 50) {
      errors.classRoomName = "Classroom name cannot exceed 50 characters";
    }

    return errors;
  };

  return (
    <>
      <Form>
        <Row>
          <Col md={8}>
            <FormGroup>
              <Label for="classRoomName">Class Room Name *</Label>
              <Input
                id="classRoomName"
                name="classRoomName"
                type="text"
                required
                value={formData?.classRoomName || ""}
                onChange={handleChange}
                disabled={buttonGroupData.isEditDisabledMode}
                invalid={!!formData.errors.classRoomName}
              />
              {formData.errors.classRoomName && (
                <div className="invalid-input">
                  {formData.errors.classRoomName}
                </div>
              )}
            </FormGroup>
          </Col>

          <Col md={4}></Col>
          <Col md={6}></Col>
          <Col md={6}>
            <CustomButtonGroup
              onCancel={handleCancel}
              onSave={handleSave}
              onDelete={handleDelete}
              onSaveEdit={handleSaveEdited}
            />
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default ClassRoomDetails;
