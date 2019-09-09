import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"

import Headline from "../components/headline"
import {Carousel, CarouselItem, Grid} from 'react-bootstrap'
import '../bootstrap/css/bootstrap.css';
import LayoutStyles from "../components/layout.module.css"

export default ({ data }) => (
  <Layout>
    <Carousel controls={false} indicators={false} pauseOnHover={false}>
      {data.allStrapiHeadline.edges.map(document => (
        <CarouselItem className={LayoutStyles.CarouselItem}>
          <Headline image={document.node.image.childImageSharp.fluid} 
                    title={document.node.title} 
                    content={document.node.content} />
        </CarouselItem>
      ))}
    </Carousel>
    <Grid></Grid>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiHeadline {
      edges {
        node {
          image {
            childImageSharp  {
              fluid(maxWidth: 2560) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          title
          content
        }
      }
    }
  }
`