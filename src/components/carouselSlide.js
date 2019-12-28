import React from "react";
import Carousel from 'react-bootstrap/Carousel'

import styles from './carouselSlide.module.css'


export default ({ children, imageUrl }) => {
    return (
    <Carousel.Item 
        className={styles.carouselImage} 
        style={ {backgroundImage: `url('${imageUrl}')` } }>
        <div className={styles.carouselContent}>
            <div className={styles.caption}>
                {children}
            </div>
        </div>
    </Carousel.Item>
    )
} 