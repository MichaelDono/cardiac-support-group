import React from "react";
import NewsItem from '../components/newsItem'
import styles from './news.module.css'

export default () => {
    
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2>News and Events</h2>
                <div className={styles.newsItems}>
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                </div>
                <div className={styles.viewAll}>View All Articles</div>
            </div>
        </div>
    )
}