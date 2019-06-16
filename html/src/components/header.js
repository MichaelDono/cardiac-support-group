import React from "react"
// import Nav from "../components/nav"
import NavLink from "../components/navlink"
import {Nav, Navbar, NavItem} from 'react-bootstrap'
import '../bootstrap/css/bootstrap.css';
import NavbarStyles from "./nav.module.css"

export default (props) => (
  <header>
  <Navbar className={NavbarStyles.navbar}>
  <Navbar.Header>
    <Navbar.Brand>
      <NavLink linkTo="/" text="" imageURL="gatsby-icon.png"/>
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
