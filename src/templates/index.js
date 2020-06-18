import React from "react"
import { graphql} from "gatsby"
import SEO from '../components/seo'
import Footer from '../components/footer'
import Alert from 'react-bootstrap/Alert'
import Header from '../components/header'
import NewsItem from '../components/newsItem'
import Tile from '../components/tile'
import CallToAction from '../components/cta'
import styles from './index.module.css'

import '../bootstrap/css/bootstrap.css';
import '../components/fonts.css'

export default ({ data }) => {
    let newsItems = data.news.edges;
    return (
    <div className={styles.container}>
      <SEO metadata={data.site.siteMetadata} />
      <Header />
      <div className={styles.lower}>
        <CallToAction image={data.index.frontmatter.ctaImage.childImageSharp} />
        <Alert variant={'primary'} className={styles.alert}>
          <Alert.Heading>Coronavirus (COVID-19)</Alert.Heading>
          <p className="mb-2">
          Our exercise classes and other activities are still on hold following government guidelines. 
          Our funding is secure, and we will reinstate them once we are confident that the appropriate 
          measures have been implemented to ensure your health and wellbeing.
          </p>
          <p className="mb-2">
          Once again, despite some charities closing due to financial pressures, the group is not in 
          that position and The Trustees look forward to seeing you all again in the future.
          </p>
          <p className="mb-2">
          We will contact our members in due course – should you wish to contact us please contact 
          Barry on 0191 5656892 or Jim on 0191 5226750.
          </p>
          <p>
          Thank you and stay safe.
          </p>
          <hr />
          <Alert.Link href="https://www.bhf.org.uk/informationsupport/heart-matters-magazine/news/coronavirus-and-your-health">Coronavirus: what it means for you if you have heart or circulatory disease.</Alert.Link>
        </Alert>
        <TileContainer />
        <News newsItems={newsItems} />
      </div>
      <Footer className={styles.footerContainer} />
    </div>
    )
}

let TileContainer = () => {
  return (
  <div className={styles.tileContainer}>
    <div className={styles.tiles}>
        <Tile title="Exercise Classes" color="#3A4A50" backgroundColor="#C7E2EC" imageUrl="img/exercise_class_1.png" />
        <Tile title="Day Trips" color="#3B5A42" backgroundColor="#D3E4DB" imageUrl="img/day_trip_1.png" />
        <Tile title="Walks" color="#3A4A50" backgroundColor="#EEE9DD" imageUrl="img/walking_1.png" />
    </div>
  </div>
  )
}

let News = ({newsItems}) => {
  return (
  <div className={styles.newsContainer}>
    <div className={styles.newsContent}>
        <h2>News and Events</h2>
        <div className={styles.newsItems}>
            {newsItems.map( ({node}) => (
              <NewsItem imageFluid={node.frontmatter.featuredimage.childImageSharp.fluid} title={node.frontmatter.title} />
            ))}
        </div>
        <div className={styles.viewAll}>View All Articles</div>
    </div>
  </div>
  )
}

export const query = graphql`
query($slug: String!) {
  index: markdownRemark(fields: { slug: { eq: $slug } }) {
    frontmatter {
      title
      ctaImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  news: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "news-post"}}}, limit: 3, sort: {fields: frontmatter___datetime, order: DESC}) {
    edges {
      node {
        frontmatter {
          title
          featuredimage {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 270) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  site {
    siteMetadata {
      description
      title
    }
  }
}
`