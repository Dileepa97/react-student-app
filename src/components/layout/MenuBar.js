import React from "react";
import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./MenuBar.sass";
import avatarImg from "../../assets/avatar.png";

function MenuBar() {
  return (
    <div>
      <Navbar className="nav-bar" expand={true} fixed="true">
        <NavbarBrand href="/"> Student App</NavbarBrand>

        <Collapse className="nav-collapse" navbar>
          <Link to="/students">
            <Nav navbar>
              <NavItem className="nav-item">Students</NavItem>
            </Nav>
          </Link>

          <Link to="/class-rooms">
            <Nav navbar>
              <NavItem className="nav-item">Class Rooms</NavItem>
            </Nav>
          </Link>

          <Link to="/teachers">
            <Nav navbar>
              <NavItem className="nav-item">Teachers</NavItem>
            </Nav>
          </Link>

          <Link to="/subjects">
            <Nav navbar>
              <NavItem className="nav-item">Subject</NavItem>
            </Nav>
          </Link>

          <Link to="/allocate-subjects">
            <Nav navbar>
              <NavItem className="nav-item">Allocate Subjects</NavItem>
            </Nav>
          </Link>

          <Link to="/allocate-class-rooms">
            <Nav navbar>
              <NavItem className="nav-item">Allocate Class Rooms</NavItem>
            </Nav>
          </Link>

          <Link to="/student-reports">
            <Nav navbar>
              <NavItem className="nav-item">Student Reports</NavItem>
            </Nav>
          </Link>
        </Collapse>

        <Nav horizontal="end" navbar>
          <NavItem>
            <img src={avatarImg} alt="profile" className="nav-avatar" />
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default MenuBar;
