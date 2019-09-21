import React from "react"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

import '../bootstrap/css/bootstrap.css';
import '../components/fonts.css'

const carouselImageWidth = 1920;
const carouselImageHeight = 860;
const carouselImageQuery = "?nf_resize=smartcrop&h=" + carouselImageHeight + "&w=" + carouselImageWidth;
export default ({ data }) => (
<>
  <NavBar />
  <Carousel>
    <Carousel.Item>
      <img src={"img/chair-exercises-for-seniors.jpg" + carouselImageQuery} className="w-100" />
    </Carousel.Item>
    <Carousel.Item>
      <img src={"img/walking.jpeg" + carouselImageQuery} className="w-100"/>
    </Carousel.Item>
    <Carousel.Item>
      <img src={"img/cafe.jpeg" + carouselImageQuery} className="w-100"/>
    </Carousel.Item>
  </Carousel>
  <Footer />
</>)