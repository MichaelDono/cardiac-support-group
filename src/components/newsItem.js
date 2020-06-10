import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TitleText from './titleText'
import styles from './newsItem.module.css'

export default () => { 
    return (
        <div className={styles.container}>
            <a href="/" className={styles.headerImage}> {/*image & title*/}
                <img src="img/whitby.jpeg"></img>
                <TitleText>Fish &amp; Chip Walk June 2020</TitleText>
            </a>
            <div className={styles.content}> {/* Body Text */ }
                <div className={styles.bodyText}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique vulputate orci, a pretium dolor varius non. Donec eget aliquam purus, sed scelerisque elit.</p> 
                    <p>Maecenas non aliquam ante.</p> 
                </div>
                <div className={styles.actions}>
                    <div className={styles.date}>
                        <span>Sat, May 23 • 10am</span>
                    </div>
                    <div className={styles.readmore}>
                        <span>Read More</span>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
