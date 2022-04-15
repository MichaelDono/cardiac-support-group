import React from "react"
import TitleText from './titleText'
import * as styles from './newsItem.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import dateFormatter from '../util/dateFormatter'
import {Link} from 'gatsby'

export default ({item}) => { 
    const title = item.title ?? "Fish & Chip Walk June 2020";
    console.log(item)
    const publishDate = dateFormatter(item.published_at, false);

    return (
        <div className={styles.container}>
            <Link to={item.slug} className={styles.headerImage}> {/*image & title*/}
                {/* <StaticImage fluid={item.frontmatter.featuredimage.childImageSharp.fluid}></StaticImage> */}
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
                    <Link to={item.slug} className={styles.readmore}>Read More</Link>
                </div>
            </div>
            
        </div>
    );
}