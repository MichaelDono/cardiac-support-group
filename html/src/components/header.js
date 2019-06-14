import React from "react"
import Nav from "../components/nav"
import NavLink from "../components/navlink"

export default (props) => (
  <header>
    <Nav>
      <NavLink linkTo="/" text="Home" imageURL="gatsby-icon.png"/>
      <NavLink linkTo="/help" text="How We Can Help"/>
      <NavLink linkTo="/about" text="Who We Are"/>
    </Nav>
  </header>
)
