import React from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

function SubjectDetails() {
  return (
    <>
      <Form>
        <Row>
          <Col md={8}>
            <FormGroup>
              <Label for="subjectName">Subject Name *</Label>
              <Input id="subjectName" name="subjectName" type="text" required />
            </FormGroup>
          </Col>

          <Col md={4}></Col>
          <Col md={4}></Col>
          <Col md={8}>
            <div className="button-group-col">
              <Button className="button" color="success">
                Save
              </Button>
              <Button className="button" color="danger">
                Delete
              </Button>
              <Button className="button" color="warning">
                Reset
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default SubjectDetails;
