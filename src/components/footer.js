import React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import styles from './footer.module.css'

export default (props) => (
<Row className={props.className}>
    <Col lg="2"/>
    <Col>
        <ul className="nav justify-content-center nav-fill">
            <li class="nav-item">
                <p class="nav-link">© Sunderland Cardiac Support Group</p>
            </li>
            <li class="nav-item">
                <p class="nav-link">Registered Charity Number 1126524</p>
            </li>
        </ul>
    </Col>
    <Col lg="2" />
</Row>)