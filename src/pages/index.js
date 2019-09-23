import React from "react"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import CarouselSplash from '../components/carouselSplash'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import styles from './index.module.css'

import '../bootstrap/css/bootstrap.css';
import '../components/fonts.css'

const domain = "https://cardiacgroup.netlify.com/";
const carouselImageQuery = "?nf_resize";
const ImageParams = "=smartcrop&w=576&h=800";
const ImageParamsMed = "=smartcrop&w=768&h=960";
const ImageParamsLarge = "=smartcrop&w=992&h=960";
const ImageParamsExtraLarge = "=smartcrop&w=1200&h=960";

export default ({ data }) => (
<div className={styles.container}>
  <NavBar className={styles.navContainer + " bg-light text-dark"} />
  <Carousel className={styles.content}>
    <Carousel.Item className={styles.carouselImage} style={
        {backgroundImage: `url(img/chair-exercises-for-seniors.jpg)`,
        backgroundPosition: `center`,
        backgroundSize: `cover`}
        } >
    </Carousel.Item>
    <Carousel.Item className={styles.carouselImage} style={
        {backgroundImage: `url(img/walking.jpeg)`,
        backgroundPosition: `center`,
        backgroundSize: `cover`}
        } >
    </Carousel.Item>
    <Carousel.Item className={styles.carouselImage} style={
        {backgroundImage: `url(img/cafe.jpeg)`,
        backgroundPosition: `center`,
        backgroundSize: `cover`}
        } >

    </Carousel.Item>
  </Carousel>
  <Footer className={styles.footerContainer + " bg-dark text-white"} />
</div>)