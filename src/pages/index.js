import React from "react"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

import '../bootstrap/css/bootstrap.css';
import '../components/fonts.css'

const carouselImageQuery = "?nf_resize=fit&h=300";
export default ({ data }) => (
<>
  <NavBar />
  <Carousel height="100%">
    <Carousel.Item>
      <img src={"img/chair-exercises-for-seniors.jpg" + carouselImageQuery}/>
    </Carousel.Item>
    <Carousel.Item>
      <img src={"img/walking.jpeg" + carouselImageQuery}/>
    </Carousel.Item>
    <Carousel.Item>
      <img src={"img/cafe.jpeg" + carouselImageQuery}/>
    </Carousel.Item>
  </Carousel>
  <Footer />
</>
  // <Layout>
  //   {/* <Carousel controls={false} indicators={false} pauseOnHover={false}>
  //     {data.allStrapiHeadline.edges.map(document => (
  //       <CarouselItem className={LayoutStyles.CarouselItem}>
  //         <Headline image={document.node.image.childImageSharp.fluid} 
  //                   title={document.node.title} 
  //                   content={document.node.content} />
  //       </CarouselItem>
  //     ))}
  //   </Carousel> */}
  //   <Grid></Grid>
  // </Layout>
)