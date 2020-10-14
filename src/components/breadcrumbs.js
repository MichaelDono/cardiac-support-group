import React from "react"
import { Link } from "gatsby"
import styles from './breadcrumbs.module.css'

export default ({ crumbs }) => { 
    // console.log(crumbs)
    return (
        <div className={styles.container} >
            <div className={styles.content}>
                <div className={styles.breadcrumbs}>
                    <Link to="/" className={styles.home}>Home</Link>
                    {crumbs.slice(1).map( ({pathname, crumbLabel}) => (
                        <>
                            <span> / </span>
                            <Link to={pathname} className={styles.home}>{crumbLabel}</Link>
                        </>
                    ))}
                </div>
                <div className={styles.socialMedia}>
                    <a className={styles.socialIcon} href="https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Flocalhost%3A8000%2Finformation-support&amp;ref_src=twsrc%5Etfw&amp;text=Sunderland%20Cardiac%20Support%20Group%20-%20Information%20and%20Support&amp;tw_p=tweetbutton&amp;url=http%3A%2F%2Flocalhost%3A8000%2Finformation-support" >
                        <img src="/img/twitter.svg" height="22" alt=""></img>
                    </a>
                    <a className={styles.socialIcon} href="/" aria-label="Share on Facebook" ><img src="/img/facebook.svg" height="22" alt=""></img></a>
                    <a className={styles.socialIcon} href="/" aria-label="Share by Email"><img src="/img/email.svg" height="22" alt=""></img></a>
                
                </div>
            </div>
        </div>
    )
}