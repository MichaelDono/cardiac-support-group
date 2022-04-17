import React from "react"
import { graphql} from "gatsby"
import Seo from '../components/seo'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Breadcrumbs from '../components/breadcrumbs'
import StyledButton from '../components/styledButton'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
      <div dangerouslySetInnerHTML={{__html: data.page.html}}></div>
      {/* <ExerciseClasses content={data.page.frontmatter.exerciseClasses} />*/}
      <MainContent content={data.tiles.nodes} /> 
    </div>
    <Footer className={styles.footerContainer} />
  </div>
  )
}

let ExerciseClasses = ({content}) => {
  const image = getImage(content.image.url);
  return (
    <div className={styles.exerciseClasses}>
        <div>
          <h2>Exercise Classes</h2>
          <p>{content.body}</p>
          <StyledButton variant="outlined" color="#ffffff" align="right" linkTo={"exercise-classes"} />
        </div>
        <GatsbyImage image={image} className={styles.exerciseClassesImage} />
    </div>
  )
}

let MainContent = ({content}) => {
  console.log(content)
  return (
    <div className={styles.mainContent}>
      {content.map( (entry, index) => (
        <div key={index}>
          <h2>{entry.title}</h2>
          <img src={entry.feature_image} />
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
    html
    title
  }
  tiles: allGhostPost(sort: {fields: published_at, order: ASC}, filter: {visibility: {eq: "public"}, tags: {elemMatch: {name: {eq: "#info-tile"}}}}) {
    nodes {
      feature_image
      title
      excerpt
    }
  }
}
`