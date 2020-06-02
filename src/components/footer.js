import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from './footer.module.css'

export default () => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                siteMetadata {
                    phone
                    email
                }
                }
            }
        `
    )
    return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.contact}>
                <h1 className={styles.header}>Contact Us</h1>
                <div>
                    <i className="material-icons">phone</i>
                    <span className={styles.contactMethod}>{site.siteMetadata.phone}</span>
                </div>
                <div>
                    <i className="material-icons">mail_outline</i>
                    <a href={"mailto: " + site.siteMetadata.email} className={styles.contactMethod}>{site.siteMetadata.email}</a>
                </div>
            </div>
            <div className={styles.quickLinks}>
                <h1 className={styles.header}>Quick Links</h1>
                <div>
                    <a>Info &amp; Support</a>
                    <a>About Us</a>
                </div>
                <div>
                    <a>How to Join</a>
                    <a>News &amp; Events</a>
                </div>
            </div>
            <div className={styles.legalLinks}>
                <a>Your Privacy</a>
                <a>Cookies</a>
            </div>
            <a className={styles.logo} href="/">
                <img src="img/header_white.svg"
                        height="42"
                        alt="Sunderland Cardiac Support Group Logo"/>
            </a>
            <div className={styles.legal}>
                <p>© 2020 Sunderland Cardiac Support Group.</p>
                <p>Registered charity in England and Wales (1126524).</p>
            </div>
        </div>
    </div>
    )
}