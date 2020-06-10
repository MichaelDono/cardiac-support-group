import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import TitleText from './titleText'
import styles from './header.module.css'

export default () => { 
    return (
        <div className={styles.container}>
            <Link to="/">
                <img src="img/header.svg"
                    height="46"
                    alt="Sunderland Cardiac Support Group Logo"
                    className="d-inline-block align-top" />
            </Link>
            
            <ul>
                <li><Link to="/">Information and Support</Link></li>
                <li><Link to="/">How to Join</Link></li>
                <li><Link to="/">About Us</Link></li>
            </ul>
        </div>
    )

}