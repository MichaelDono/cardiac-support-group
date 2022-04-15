import React from "react"
import { graphql} from "gatsby"
import SEO from '../components/seo'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Breadcrumbs from '../components/breadcrumbs'
import StyledButton from '../components/styledButton'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from './information-support.module.css'

import '../bootstrap/css/bootstrap.css';
import '../components/fonts.css'

export default ({ pageContext, data }) => {
  const { breadcrumb: { crumbs }} = pageContext;
  return (
  <div className={styles.container}>
    <SEO metadata={data.site.siteMetadata} />
    <Navbar />
    <div className={styles.content}>
      <Breadcrumbs crumbs={crumbs} />
      <Header content={data.page.frontmatter.featured} />
      <ExerciseClasses content={data.page.frontmatter.exerciseClasses} />
      <MainContent content={data.page.frontmatter.main} />
    </div>
    <Footer className={styles.footerContainer} />
  </div>
  )
}

let Header = ({content}) => {
  const image = getImage(content.image.url);
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1>Information and Support</h1>
        <p>{content.body}</p>
        <GatsbyImage image={image} alt="" className={styles.headerImage} objectFit="cover" objectPosition="50% 10%" />
      </div>
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
  const image = getImage(content.image.url);
  return (
    <div className={styles.mainContent}>
      {content.map( (entry, index) => (
        <div key={index}>
          <h2>{entry.heading}</h2>
          <GatsbyImage image={image} />
          <p>{entry.body}</p>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
query($slug: String!) {
  site {
    siteMetadata {
      description
      title
    }
  }
  page: allGhostPage(filter: {slug: {eq: $slug}}) {
    edges {
      node {
        html
        title
      }
    }
  }
}
`