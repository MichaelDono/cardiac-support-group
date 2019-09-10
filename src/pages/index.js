import React from "react"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from '../components/navbar'

import '../bootstrap/css/bootstrap.css';
import '../components/fonts.css'

export default ({ data }) => (
  <Container fluid="true">
    <Row>
      <NavBar />
      <Col lg="9" xl="10">
      </Col>
    </Row>
  </Container>
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