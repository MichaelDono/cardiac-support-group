import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './footer.module.css'

export default ({ data }) => (

    <Container className="bg-dark text-white" fluid="true">
    <Row>
        <Col lg="2"/>
        <Col>
            <ul className="list-inline">
                <li className="list-inline-item">© Sunderland Cardiac Support Group</li>
                <li className="list-inline-item">Privacy Policy</li>
            </ul>
        </Col>
        <Col lg="2" />
    </Row>
    
</Container>
)