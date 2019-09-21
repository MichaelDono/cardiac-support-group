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

const carouselImageWidth = 1920;
const carouselImageHeight = 860;
const carouselImageQuery = "?nf_resize=smartcrop&h=" + carouselImageHeight + "&w=" + carouselImageWidth;

export default ({ data }) => (
<div className={styles.container}>
  <NavBar className={styles.navContainer + " bg-light text-dark"} />
  <Carousel className={styles.content}>
    <Carousel.Item className={styles.carouselImage} >
      <img src={"img/chair-exercises-for-seniors.jpg" + carouselImageQuery} />
    </Carousel.Item>
    <Carousel.Item className={styles.carouselImage}>
      <img src={"img/walking.jpeg" + carouselImageQuery} />
    </Carousel.Item>
    <Carousel.Item className={styles.carouselImage}>
      <img src={"img/cafe.jpeg" + carouselImageQuery} />
    </Carousel.Item>
  </Carousel>
  <Footer className={styles.footerContainer + " bg-dark text-white"} />
</div>)