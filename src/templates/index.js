import React from "react"
import { graphql} from "gatsby"
import Seo from '../components/seo'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import NewsItem from '../components/newsItem'
import Tile from '../components/tile'
import CallToAction from '../components/cta'
import * as styles from './index.module.css'

import '../components/fonts.css'

const Home = ({ data }) => {
  return (
  <div className={styles.container}>
    <Seo metadata={data.site.siteMetadata} />
    <Navbar />
    <div className={styles.lower}>
      <CallToAction image={data.page.feature_image} />
      <div dangerouslySetInnerHTML={{__html: data.page.html}}></div>
      <TileContainer edges={data.tiles.edges} />
      <News newsItems={data.news.edges} />
    </div>
    <Footer className={styles.footerContainer} />
  </div>
  )
}



let TileContainer = ({edges}) => {
  return (
  <div className={styles.tileContainer}>
    <div className={styles.tiles}>
        <Tile title={edges[0].node.title} 
              color="#3A4A50" backgroundColor="#C7E2EC" 
              imageUrl={edges[0].node.feature_image}
              linkTo={"information-support/exercise-classes/"} >
        {edges[0].node.excerpt}
        </Tile>
        <Tile title={edges[1].node.title} 
              color="#3B5A42" backgroundColor="#D3E4DB" 
              imageUrl={edges[1].node.feature_image} >
        {edges[1].node.excerpt}
        </Tile>
        <Tile title={edges[2].node.title} 
              color="#3A4A50" backgroundColor="#EEE9DD" 
              imageUrl={edges[2].node.feature_image} >
        {edges[2].node.excerpt}
        </Tile>
    </div>
  </div>
  )
}

let News = ({newsItems}) => {
  newsItems = newsItems.filter( (item) => {
    if (item.node.tags[0] !== undefined) { 
      if (item.node.tags[0].name.slice(0, 1) === "#") {
        return false
      }
    } 
    return true;
  }).slice(0, 3);
  return (
  <div className={styles.newsContainer}>
    <div className={styles.newsContent}>
        <h2>News and Events</h2>
        <div className={styles.newsItems}>
            {newsItems.map( ({node}, index) => 
              <NewsItem item={node} key={index} />
            )}
        </div>
        {/* uncomment below when news and events is added */}
        {/* <Link to={"/"} className={styles.viewAll}>View All Articles</Link> */}
    </div>
  </div>
  )
}

export default Home;
export const query = graphql`
query($slug: String!) {
  page: ghostPage(slug: { eq: $slug }) {
    html
    title
    feature_image
  }
  news: allGhostPost(sort: {fields: published_at, order: DESC}, filter: {visibility: {eq: "public"}}) {
    edges {
      node {
        feature_image
        html
        page
        title
        excerpt
        published_at
        visibility
        slug
        tags {
          name
        }
      }
    }
  }
  tiles: allGhostPost(filter: {visibility: {eq: "public"}, tags: {elemMatch: {name: {eq: "#tile"}}}}) {
    edges {
      node {
        feature_image
        title
        excerpt
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