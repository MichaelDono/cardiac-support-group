import React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import styles from './footer.module.css'

export default (props) => (
<Row className={props.className}>
    <Col lg="2"/>
    <Col>
        <ul className="list-inline">
            <li className="list-inline-item">© Sunderland Cardiac Support Group</li>
            <li className="list-inline-item">Privacy Policy</li>
        </ul>
    </Col>
    <Col lg="2" />
</Row>)