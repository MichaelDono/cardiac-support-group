import React from "react";
import BootstrapCarousel from 'react-bootstrap/Carousel'

import styles from './carousel.module.css'

export default ({ items }) => {
    const carouselItems = items.map( (item) => (
        <BootstrapCarousel.Item
            className={styles.carouselImage} 
            style={ {backgroundImage: `url('${item.imageUrl}')` } }>
                <div className={styles.carouselContent}>
                    <div className={styles.caption}>
                        {item.text}
                    </div>
                </div>
        </BootstrapCarousel.Item>
    ));
    return (
        <BootstrapCarousel className={styles.container} fade={true}>    
            {carouselItems}
        </BootstrapCarousel>
    )
}