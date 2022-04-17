import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import * as styles from './footer.module.css'

const Footer = () => {
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
                    <Link to="/information-support">Info &amp; Support</Link>
                    <Link to="/information-support/exercise-classes">Exercise Classes</Link>
                </div>
                <div>
                    <Link to="/how-to-join">How to Join</Link>
                    <Link to="/">News &amp; Events</Link>
                </div>
            </div>
            <div className={styles.legalLinks}>
                <Link to="/">Your Privacy</Link>
                <Link to="/">Cookies</Link>
            </div>
            <Link className={styles.logo} to="/">
                <img src="/img/header_white.svg"
                        height="42"
                        alt="Sunderland Cardiac Support Group Logo"/>
            </Link>
            <div className={styles.legal}>
                <p>© 2021 Sunderland Cardiac Support Group.</p>
                <p>Registered charity in England and Wales (1126524).</p>
            </div>
        </div>
    </div>
    )
}

export default Footer;