import React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './footer.module.css'

export default (props) => (
<div className={styles.container}>
    <div className={styles.content}>
        <div className={styles.contact}>
            <h1 className={styles.header}>Contact Us</h1>
            <div>
                <i className="material-icons">phone</i>
                <span>0191 5656892</span>
            </div>
            <div>
                <i className="material-icons">mail_outline</i>
                <span>hello@sunderlandcardiac.org.uk</span>
            </div>
        </div>
        <div className={styles.quickLinks}>
            <h1 className={styles.header}>Quick Links</h1>
            <div>
                <div>
                    <a>Info &amp; Support</a>
                    <a>About Us</a>
                </div>
                <div>
                    <a>How to Join</a>
                    <a>News &amp; Events</a>
                </div>
                
            </div>
        </div>
        <div className={styles.legalLinks}>
            <a>Your Privacy</a>
            <a>Cookies</a>
        </div>
        <div className={styles.logo}>
            <img src="img/header_white.svg"
                    height="42"
                    alt="Sunderland Cardiac Support Group Logo"/>
        </div>
        <div className={styles.legal}>
            <p>© 2020 Sunderland Cardiac Support Group.</p>
            <p>Registered charity in England and Wales (1126524).</p>
        </div>
    </div>
</div>)