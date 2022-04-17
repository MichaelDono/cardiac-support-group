import React from "react"
import TitleText from './titleText'
import * as styles from './newsItem.module.css'
import dateFormatter from '../util/dateFormatter'
import {Link} from 'gatsby'

const NewsItem = ({item}) => { 
    const title = item.title ?? "Fish & Chip Walk June 2020";
    const publishDate = dateFormatter(item.published_at, false);
    const excerpt = item.excerpt.substring(0, 175) + "...";
    return (
        <div className={styles.container}>
            <Link to={item.slug} className={styles.headerImage}> {/*image & title*/}
                <img src={item.feature_image} alt="" />
                <TitleText>{title}</TitleText>
            </Link>
            <div className={styles.content}> {/* Body Text */ }
                <div className={styles.bodyText}>
                    <p>{excerpt}</p>
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

export default NewsItem;