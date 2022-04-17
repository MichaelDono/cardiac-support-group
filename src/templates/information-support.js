import React from "react"
import { graphql} from "gatsby"
import Seo from '../components/seo'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Breadcrumbs from '../components/breadcrumbs'
import StyledButton from '../components/styledButton'
import * as styles from './information-support.module.css'

import '../components/fonts.css'

const InformationSupport = ({ pageContext, data }) => {
  const { breadcrumb: { crumbs }} = pageContext;
  return (
  <div className={styles.container}>
    <Seo metadata={data.site.siteMetadata} />
    <Navbar />
    <div className={styles.content}>
      <Breadcrumbs crumbs={crumbs} />
      <Header content={data.page} />
      <div dangerouslySetInnerHTML={{__html: data.page.html}}></div>
      <Cards content={data.card.nodes} />
      <MainContent content={data.tiles.nodes} /> 
    </div>
    <Footer className={styles.footerContainer} />
  </div>
  )
}

let Header = ({content}) => {
  return (
    <div className={styles.header}>
      <div>
        <h1>{content.title}</h1>
        <p>{content.feature_image_caption}</p>
        <img src={content.feature_image} alt={content.feature_image_alt} className={styles.headerImage} />
      </div>
    </div>
    )
}

let Cards = ({content}) => {
  return (
    <div className={styles.cards}>
      {content.map( (entry, index) => (
        <>
          <div key={index}>
            <h2>{entry.title}</h2>
            <p>{entry.excerpt}</p>
            <StyledButton variant="outlined" color="#ffffff" align="right" linkTo={"exercise-classes"} />
          </div>
          <img src={entry.feature_image} alt={entry.feature_image_alt} className={styles.cardImage} />
        </>
      ))}
    </div>)
}

let MainContent = ({content}) => {
  return (
    <div className={styles.mainContent}>
      {content.map( (entry, index) => (
        <div key={index}>
          <h2>{entry.title}</h2>
          <img src={entry.feature_image} alt={entry.feature_image_alt} />
          <p>{entry.excerpt}</p>
        </div>
      ))}
    </div>
  )
}

export default InformationSupport;
export const query = graphql`
query($slug: String!) {
  site {
    siteMetadata {
      description
      title
    }
  }
  page: ghostPage(slug: { eq: $slug }) {
    title
    html
    feature_image
    feature_image_alt
    feature_image_caption
  }
  tiles: allGhostPost(sort: {fields: published_at, order: ASC}, filter: {visibility: {eq: "public"}, tags: {elemMatch: {name: {eq: "#info-tile"}}}}) {
    nodes {
      title
      excerpt
      feature_image
      feature_image_alt
      feature_image_caption
    }
  }
  card: allGhostPost(sort: {fields: published_at, order: ASC}, filter: {visibility: {eq: "public"}, tags: {elemMatch: {name: {eq: "#info-card"}}}}) {
    nodes {
      title
      excerpt
      feature_image
      feature_image_alt
      feature_image_caption
    }
  }
}
`