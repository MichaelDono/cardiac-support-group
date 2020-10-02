import React from "react"
import TitleText from './titleText'
import styles from './newsItem.module.css'
import Image from 'gatsby-image'
import dateFormatter from '../util/dateFormatter'
import {Link} from 'gatsby'

export default ({item}) => { 
    const title = item.frontmatter.title ?? "Fish & Chip Walk June 2020";
    const publishDate = dateFormatter(item.frontmatter.datetime);

    return (
        <div className={styles.container}>
            <Link to={item.fields.slug} className={styles.headerImage}> {/*image & title*/}
                <Image fluid={item.frontmatter.featuredimage.childImageSharp.fluid}></Image>
                <TitleText>{title}</TitleText>
            </Link>
            <div className={styles.content}> {/* Body Text */ }
                <div className={styles.bodyText}>
                    <p>{item.excerpt}</p>
                </div>
                <div className={styles.actions}>
                    <div className={styles.date}>
                        <span>{publishDate}</span>
                    </div>
                    <Link to={item.fields.slug} className={styles.readmore}>Read More</Link>
                </div>
            </div>
            
        </div>
    );
}