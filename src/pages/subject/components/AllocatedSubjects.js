import React from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

function AllocatedSubjects() {
  return (
    <>
      <Row>
        <Col md={1}>
          <Label for="subject">Subject *</Label>
        </Col>
        <Col md={6}>
          <Input id="subject" name="subject" type="select" required>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </Col>

        <Col md={2}>
          <div className="button-group-col">
            <Button className="button" color="success">
              Allocate
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default AllocatedSubjects;
