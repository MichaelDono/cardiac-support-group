import React from "react"
import { Link } from "gatsby"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import NavLink from "./navlink"
import '../bootstrap/css/bootstrap.css';
import styles from './navbar.module.css'
import Nav from "react-bootstrap/Nav";

export default (props) => (
<Row className={props.className}>
    <Col lg="3"/>
    <Col>
        <Navbar bg="light" variant="light" className={styles.container}>
            <Navbar.Brand className={styles.logo}>
                <img src="img/logo.png"
                    height="40"
                    className="d-inline-block align-top" />
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link linkTo="/" eventKey="1" className={styles.link}>How We Can Help</Nav.Link>
                    <Nav.Link linkTo="/" eventKey="2" className={styles.link}>Who We Are</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Col>
    <Col lg="3" />
</Row>)
