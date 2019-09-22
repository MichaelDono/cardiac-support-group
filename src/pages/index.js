import React from "react"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import styles from './index.module.css'

import '../bootstrap/css/bootstrap.css';
import '../components/fonts.css'

const domain = "https://cardiacgroup.netlify.com/";
const carouselImageQuery = "?nf_resize";
const ImageParams = "=smartcrop&h=800&w=450";
const ImageParamsMed = "=smartcrop&h=1000&w=1600";

export default ({ data }) => (
<div className={styles.container}>
  <NavBar className={styles.navContainer + " bg-light text-dark"} />
  <Carousel className={styles.content}>
    <Carousel.Item className={styles.carouselImage} >
      <picture>
        <source media="(max-width: 499px)" srcset={`${domain}img/chair-exercises-for-seniors.jpg${carouselImageQuery}${ImageParams}`} />
        <source media="(min-width: 500px)" srcset={`${domain}img/chair-exercises-for-seniors.jpg${carouselImageQuery}${ImageParamsMed}`} />
        <img src={"img/chair-exercises-for-seniors.jpg" + carouselImageQuery} />
      </picture>
    </Carousel.Item>
    <Carousel.Item className={styles.carouselImage}>
      <picture>
        <source media="(max-width: 499px)" srcset={`${domain}img/walking.jpeg${carouselImageQuery}${ImageParams}`} />
        <source media="(min-width: 500px)" srcset={`${domain}img/walking.jpeg${carouselImageQuery}${ImageParamsMed}`} />
        <img src={"img/walking.jpeg" + carouselImageQuery} />
      </picture>
    </Carousel.Item>
    <Carousel.Item className={styles.carouselImage}>
      <picture>
        <source media="(max-width: 499px)" srcset={`${domain}img/cafe.jpeg${carouselImageQuery}${ImageParams}`} />
        <source media="(min-width: 500px)" srcset={`${domain}img/cafe.jpeg${carouselImageQuery}${ImageParamsMed}`} />
        <img src={"img/cafe.jpeg" + carouselImageQuery} />
      </picture>
    </Carousel.Item>
  </Carousel>
  <Footer className={styles.footerContainer + " bg-dark text-white"} />
</div>)