import React from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import "./StudentDetails.sass";

function StudentDetails() {
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
              />
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
              />
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
              />
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
              />
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
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label for="birthDate">Date of Birth *</Label>
              <Input id="birthDate" name="birthDate" type="date" required />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label for="classRoom">Class Room *</Label>
              <Input id="classRoom" name="classRoom" type="select" required>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Col>

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

export default StudentDetails;
