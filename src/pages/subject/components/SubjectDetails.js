import React from "react";
import { Form, Row, Col, FormGroup, Label, Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  updateForm,
  resetForm,
  validateForm,
} from "../../../redux/actions/formActions";
import SubjectApi from "../../../api/SubjectApi";
import CustomButtonGroup from "../../../components/common/CustomButtonGroup";

function SubjectDetails() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.subjectForm);
  const buttonGroupData = useSelector((state) => state.buttonGroup);

  const subjectApi = new SubjectApi();

  const handleChange = (e) => {
    dispatch(updateForm("subjectForm", { [e.target.name]: e.target.value }));
  };

  const handleCancel = () => {
    dispatch(resetForm("subjectForm"));
  };

  const handleSave = async () => {
    try {
      const errors = validate(formData);
      dispatch(validateForm("subjectForm", errors));

      if (Object.keys(errors).length === 0) {
        const subjectData = {
          name: formData.subjectName,
        };

        await subjectApi.createSubject(subjectData);
        dispatch(resetForm("subjectForm"));
        window.location.reload();
      }
    } catch (error) {
      console.error("Error creating subject:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await subjectApi.deleteSubject(formData.subjectId);
      dispatch(resetForm("subjectForm"));
      window.location.reload();
    } catch (error) {
      console.error("Error creating subject:", error);
    }
  };

  const handleSaveEdited = async () => {
    try {
      const errors = validate(formData);
      dispatch(validateForm("subjectForm", errors));

      if (Object.keys(errors).length === 0) {
        const subjectData = {
          name: formData.subjectName,
        };

        await subjectApi.updateSubject(formData.subjectId, subjectData);
        dispatch(resetForm("subjectForm"));
        window.location.reload();
      }
    } catch (error) {
      console.error("Error updating subject:", error);
    }
  };

  const validate = (formData) => {
    const errors = {};

    if (formData.subjectName === "") {
      errors.subjectName = "Subject name is required";
    } else if (formData.subjectName.length > 50) {
      errors.subjectName = "Subject name cannot exceed 50 characters";
    }

    return errors;
  };

  return (
    <>
      <Form>
        <Row>
          <Col md={8}>
            <FormGroup>
              <Label for="subjectName">Subject Name *</Label>
              <Input
                id="subjectName"
                name="subjectName"
                type="text"
                required
                value={formData?.subjectName || ""}
                onChange={handleChange}
                disabled={buttonGroupData.isEditDisabledMode}
                invalid={!!formData.errors.subjectName}
              />
              {formData.errors.subjectName && (
                <div className="invalid-input">
                  {formData.errors.subjectName}
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

export default SubjectDetails;
