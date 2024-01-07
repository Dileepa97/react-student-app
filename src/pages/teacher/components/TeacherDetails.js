import React from "react";
import { Form, Row, Col, FormGroup, Label, Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  updateForm,
  resetForm,
  validateForm,
} from "../../../redux/actions/formActions";
import TeacherApi from "../../../api/TeacherApi";
import CustomButtonGroup from "../../../components/common/CustomButtonGroup";

function TeacherDetails() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.teacherForm);
  const buttonGroupData = useSelector((state) => state.buttonGroup);

  const teacherApi = new TeacherApi();

  const handleChange = (e) => {
    dispatch(updateForm("teacherForm", { [e.target.name]: e.target.value }));
  };

  const handleCancel = () => {
    dispatch(resetForm("teacherForm"));
  };

  const handleSave = async () => {
    try {
      const errors = validate(formData);
      dispatch(validateForm("teacherForm", errors));

      if (Object.keys(errors).length === 0) {
        const teacherData = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          contactNo: formData.contactNo,
          email: formData.email,
        };

        await teacherApi.createTeacher(teacherData);
        dispatch(resetForm("teacherForm"));
        window.location.reload();
      }
    } catch (error) {
      console.error("Error creating teacher:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await teacherApi.deleteTeacher(formData.id);
      dispatch(resetForm("teacherForm"));
      window.location.reload();
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

  const handleSaveEdited = async () => {
    try {
      const errors = validate(formData);
      dispatch(validateForm("teacherForm", errors));

      if (Object.keys(errors).length === 0) {
        const teacherData = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          contactNo: formData.contactNo,
          email: formData.email,
        };

        await teacherApi.updateTeacher(formData.id, teacherData);
        dispatch(resetForm("teacherForm"));
        window.location.reload();
      }
    } catch (error) {
      console.error("Error updating teacher:", error);
    }
  };

  const validate = (formData) => {
    const errors = {};

    if (formData.firstName === "") {
      errors.firstName = "First Name is required";
    } else if (formData.firstName.length > 50) {
      errors.firstName = "First Name cannot exceed 50 characters";
    }

    if (formData.contactNo === "") {
      errors.contactNo = "Contact No is required";
    } else if (formData.contactNo.length > 20) {
      errors.contactNo = "Contact No cannot exceed 50 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.email === "") {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Email is not valid";
    } else if (formData.email.length > 50) {
      errors.email = "Email cannot exceed 100 characters";
    }

    return errors;
  };

  return (
    <>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="firstName">First Name *</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Nimal"
                type="text"
                required
                value={formData?.firstName || ""}
                onChange={handleChange}
                disabled={buttonGroupData.isEditDisabledMode}
                invalid={!!formData.errors.firstName}
              />
              {formData.errors.firstName && (
                <div className="invalid-input">{formData.errors.firstName}</div>
              )}
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label for="lastName">Last Name </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Rathnayeke"
                type="text"
                value={formData?.lastName || ""}
                onChange={handleChange}
                disabled={buttonGroupData.isEditDisabledMode}
                invalid={!!formData.errors.lastName}
              />
              {formData.errors.lastName && (
                <div className="invalid-input">{formData.errors.lastName}</div>
              )}
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label for="contactNo">Contact No *</Label>
              <Input
                id="contactNo"
                name="contactNo"
                placeholder="+94 71 2345678"
                type="tel"
                required
                value={formData?.contactNo || ""}
                onChange={handleChange}
                disabled={buttonGroupData.isEditDisabledMode}
                invalid={!!formData.errors.contactNo}
              />
              {formData.errors.contactNo && (
                <div className="invalid-input">{formData.errors.contactNo}</div>
              )}
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label for="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                placeholder="example@email.com"
                type="email"
                required
                value={formData?.email || ""}
                onChange={handleChange}
                disabled={buttonGroupData.isEditDisabledMode}
                invalid={!!formData.errors.email}
              />
              {formData.errors.email && (
                <div className="invalid-input">{formData.errors.email}</div>
              )}
            </FormGroup>
          </Col>

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

export default TeacherDetails;
