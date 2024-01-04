import React from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

function ReportStudentDetails() {
  return (
    <>
      <Row>
        <Col md={1}>
          <Label for="student">Student *</Label>
        </Col>
        <Col md={6}>
          <Input id="student" name="student" type="select" required>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </Col>
      </Row>
    </>
  );
}

export default ReportStudentDetails;
