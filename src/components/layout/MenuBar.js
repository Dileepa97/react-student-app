import React from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./MenuBar.sass";
import avatarImg from "../../assets/avatar.png";

function MenuBar() {
  return (
    <div>
      <Navbar className="nav-bar" expand={true} fixed="true">
        <NavbarBrand href="/">
          {" "}
          <Link to="/">Student App </Link>
        </NavbarBrand>

        <Collapse className="nav-collapse" navbar>
          <Nav className="" navbar>
            <NavItem>
              <NavLink href="/components/">Student</NavLink>
            </NavItem>
          </Nav>
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
