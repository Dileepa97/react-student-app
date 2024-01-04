import React from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

function AllocateTeacherDetails() {
  return (
    <>
      <Col md={6}>
        <FormGroup>
          <Label for="teacher">Teacher *</Label>
          <Input id="teacher" name="teacher" type="select" required>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
      </Col>
    </>
  );
}

export default AllocateTeacherDetails;
