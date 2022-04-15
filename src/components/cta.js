import React from "react"
import { Link } from "gatsby"
import * as styles from './cta.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default ({ ctaImage }) => { 
    const image = getImage(ctaImage);
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>You are not alone.</h1>
                    <h2>We can help you on your path to recovery.</h2>
                </div>
                <div className={styles.imgContainer}>
                    <GatsbyImage image={image} alt="" className={styles.img}/>
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