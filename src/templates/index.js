import React from "react"
import { graphql} from "gatsby"
import SEO from '../components/seo'
import Footer from '../components/footer'
import BootstrapAlert from 'react-bootstrap/Alert'
import Navbar from '../components/navbar'
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
      <Navbar />
      <div className={styles.lower}>
        <CallToAction image={data.index.frontmatter.ctaImage.childImageSharp} />
        <Alert alert={data.index.frontmatter.importantInfo} variant={'primary'} className={styles.alert} />
        <TileContainer items={data.index.frontmatter.features} />
        <News newsItems={newsItems} />
      </div>
      <Footer className={styles.footerContainer} />
    </div>
    )
}

let Alert = ({alert, variant, className}) => {
  return (
    <BootstrapAlert variant={variant} className={className}>
      <BootstrapAlert.Heading>{alert.heading}</BootstrapAlert.Heading>
        <p>{alert.body}</p>
        {alert.footer && 
        <>
          <hr />
          <BootstrapAlert.Link href={alert.footer.url}>{alert.footer.body}</BootstrapAlert.Link>
        </>
        }
    </BootstrapAlert>
  )
}

let TileContainer = ({items}) => {
  return (
  <div className={styles.tileContainer}>
    <div className={styles.tiles}>
        <Tile title={items.firstCTA.title} 
              color="#3A4A50" backgroundColor="#C7E2EC" 
              imageUrl="img/exercise_class_1.png" >
        {items.firstCTA.description}
        </Tile>
        <Tile title={items.secondCTA.title} 
              color="#3B5A42" backgroundColor="#D3E4DB" 
              imageUrl="img/day_trip_1.png" >
        {items.secondCTA.description}
        </Tile>
        <Tile title={items.thirdCTA.title} 
              color="#3A4A50" backgroundColor="#EEE9DD" 
              imageUrl="img/walking_1.png" >
        {items.thirdCTA.description}
        </Tile>
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
      importantInfo {
        heading
        body
        footer {
          body
          url
        }
      }
      features {
        firstCTA {
          title
          description
        }
        secondCTA {
          title
          description
        }
        thirdCTA {
          title
          description
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
                ...GatsbyImageSharpFluid_withWebp
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