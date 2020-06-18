import React from "react"
import { Link } from "gatsby"
import styles from './cta.module.css'

export default () => { 
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>You are not alone.</h1>
                    <h2>We can help you on your path to recovery.</h2>
                </div>
                <div className={styles.imgContainer}>
                    <img src="img/sitting_1.png" alt="" />
                </div>
                <div className={styles.buttonContainer}>
                    <Link to="/information-support" className={styles.button}>
                        <span>Learn More</span>
                    </Link>
                </div>
                
            </div>
            
        </div>
    )

}