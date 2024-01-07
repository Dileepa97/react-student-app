import React, { useEffect, useState } from "react";
import { Form, Row, Col, FormGroup, Label, Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import StudentApi from "../../../api/StudentApi";
import ClassRoomApi from "../../../api/ClassRoomApi";
import {
  updateForm,
  resetForm,
  validateForm,
} from "../../../redux/actions/formActions";
import CustomButtonGroup from "../../../components/common/CustomButtonGroup";
import "./StudentDetails.sass";

function StudentDetails() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.studentForm);
  const buttonGroupData = useSelector((state) => state.buttonGroup);

  const studentApi = new StudentApi();
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
  }, []);

  const handleChange = (e) => {
    dispatch(updateForm("studentForm", { [e.target.name]: e.target.value }));
  };

  const handleCancel = () => {
    dispatch(resetForm("studentForm"));
  };

  const handleSave = async () => {
    try {
      const errors = validate(formData);
      dispatch(validateForm("studentForm", errors));

      if (Object.keys(errors).length === 0) {
        const studentData = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          contactPerson: formData.contactPerson,
          contactNo: formData.contactNo,
          email: formData.email,
          dob: formData.birthDate,
          classRoomId: formData.classRoomId,
        };

        await studentApi.createStudent(studentData);
        dispatch(resetForm("studentForm"));
        window.location.reload();
      }
    } catch (error) {
      console.error("Error creating student:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await studentApi.deleteStudent(formData.id);
      dispatch(resetForm("studentForm"));
      window.location.reload();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleSaveEdited = async () => {
    try {
      const errors = validate(formData);
      dispatch(validateForm("studentForm", errors));

      if (Object.keys(errors).length === 0) {
        const studentData = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          contactPerson: formData.contactPerson,
          contactNo: formData.contactNo,
          email: formData.email,
          dob: formData.birthDate,
          classRoomId: formData.classRoomId,
        };

        await studentApi.updateStudent(formData.id, studentData);
        dispatch(resetForm("studentForm"));
        window.location.reload();
      }
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  const validate = (formData) => {
    const errors = {};

    if (formData.firstName === "") {
      errors.firstName = "First Name is required";
    } else if (formData.firstName.length > 50) {
      errors.firstName = "First Name cannot exceed 50 characters";
    }

    if (formData.lastName === "") {
      errors.lastName = "Last Name is required";
    } else if (formData.lastName.length > 50) {
      errors.lastName = "Last Name cannot exceed 50 characters";
    }

    if (formData.contactPerson === "") {
      errors.contactPerson = "Contact Person is required";
    } else if (formData.contactPerson.length > 50) {
      errors.contactPerson = "Contact Person cannot exceed 50 characters";
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

    if (formData.birthDate === "") {
      errors.birthDate = "Birth Date is required";
    }

    if (formData.classRoomId === "") {
      errors.classRoomId = "Class Room is required";
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
              <Label for="lastName">Last Name *</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Rathnayeke"
                type="text"
                required
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
              <Label for="contactPerson">Contact Person *</Label>
              <Input
                id="contactPerson"
                name="contactPerson"
                type="text"
                required
                value={formData?.contactPerson || ""}
                onChange={handleChange}
                disabled={buttonGroupData.isEditDisabledMode}
                invalid={!!formData.errors.contactPerson}
              />
              {formData.errors.contactPerson && (
                <div className="invalid-input">
                  {formData.errors.contactPerson}
                </div>
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

          <Col md={12}>
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

          <Col md={6}>
            <FormGroup>
              <Label for="birthDate">Date of Birth *</Label>
              <Input
                id="birthDate"
                name="birthDate"
                type="date"
                required
                value={formData?.birthDate || ""}
                onChange={handleChange}
                disabled={buttonGroupData.isEditDisabledMode}
                invalid={!!formData.errors.birthDate}
              />
              {formData.errors.birthDate && (
                <div className="invalid-input">{formData.errors.birthDate}</div>
              )}
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label for="classRoom">Classroom *</Label>
              <Input
                id="classRoom"
                name="classRoomId"
                type="select"
                required
                value={formData?.classRoomId}
                onChange={handleChange}
                disabled={buttonGroupData.isEditDisabledMode}
                invalid={!!formData.errors.classRoomId}
              >
                <option value="" disabled>
                  Please select
                </option>
                {classRooms.map((classroom) => (
                  <option key={classroom.id} value={classroom.id}>
                    {classroom.name}
                  </option>
                ))}
              </Input>
              {formData.errors.classRoomId && (
                <div className="invalid-input">
                  {formData.errors.classRoomId}
                </div>
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

export default StudentDetails;
