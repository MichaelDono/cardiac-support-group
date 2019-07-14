import React from "react"
import NavLink from "../components/navlink"
import NavImage from "../components/navImage"
import {Nav, Navbar, NavItem} from 'react-bootstrap'
import '../bootstrap/css/bootstrap.css';
import HeaderStyles from "./header.module.css"

export default (props) => (
<header>
  <Navbar className={HeaderStyles.navbar}>
    <Navbar.Header>
      <Navbar.Brand>
        
        <NavImage linkTo="/" imageURL="scsg-icon.svg"/>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          <NavLink linkTo="/help" text="How We Can Help"/>
        </NavItem>
        <NavItem eventKey={2} href="#">
          <NavLink linkTo="/about" text="Who We Are"/>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</header>
)
