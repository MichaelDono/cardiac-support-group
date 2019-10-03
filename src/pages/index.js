import React from "react"

// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
// import CarouselSplash from '../components/carouselSplash'
import Card from 'react-bootstrap/Card'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import styles from './index.module.css'

import '../bootstrap/css/bootstrap.css';
import '../components/fonts.css'

// const domain = "https://cardiacgroup.netlify.com/";
// const carouselImageQuery = "?nf_resize";
// const ImageParams = "=smartcrop&w=576&h=800";
// const ImageParamsMed = "=smartcrop&w=768&h=960";
// const ImageParamsLarge = "=smartcrop&w=992&h=960";
// const ImageParamsExtraLarge = "=smartcrop&w=1200&h=960";

const Content = ({ children }) => (
  <div className={styles.carouselContent}>
    <div className={styles.caption}>
      {children}
    </div>
  </div>
)

export default ({ data }) => (
<div className={styles.container}>
  <NavBar className={styles.navContainer + " bg-light text-dark"} />
  <Carousel className={styles.content}>
    <Carousel.Item className={styles.carouselImage} style={
        {backgroundImage: `url(img/chair-exercises-for-seniors.jpg)`,
        backgroundPosition: `center`,
        backgroundSize: `cover`}
        } >
          <Content>
            <p>Take part in our fun-filled exercise classes run by our fully qualified instructors.</p>
            {/* <p>A charity run by former heart patients for the support of heart patients</p> */}
          </Content>
    </Carousel.Item>
    <Carousel.Item className={styles.carouselImage} style={
        {backgroundImage: `url(img/walking.jpeg)`,
        backgroundPosition: `center`,
        backgroundSize: `cover`}
        } >
          <Content>
            <p>Join one of our affordable summer day trips.</p>
          </Content>
    </Carousel.Item>
    <Carousel.Item className={styles.carouselImage} style={
        {backgroundImage: `url(img/cafe.jpeg)`,
        backgroundPosition: `center`,
        backgroundSize: `cover`}
        } >
          <Content>
            <p>Come along to our monthly relaxed and informal social evenings.</p>
          </Content>
    </Carousel.Item>
  </Carousel>
  <div className={styles.lower}>
    <Card className={styles.card}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <Footer className={styles.footerContainer + " text-white"} />
</div>)