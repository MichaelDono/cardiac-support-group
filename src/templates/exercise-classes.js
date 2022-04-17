import React from "react"
import { graphql} from "gatsby"
import Seo from '../components/seo'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Breadcrumbs from '../components/breadcrumbs'
import * as styles from './exercise-classes.module.css'

import '../components/fonts.css'

const ExerciseClasses = ({ pageContext, data }) => {
  const { breadcrumb: { crumbs }} = pageContext;
  return (
  <div className={styles.container}>
    <Seo metadata={data.site.siteMetadata} />
    <Navbar />
    <div className={styles.content}>
      <Breadcrumbs crumbs={crumbs} />
       <Header content={data.page} />
      {/*<MainContent content={data.page.frontmatter.main} />
      <Schedule schedule={data.page.frontmatter.schedule} /> */}
      <div dangerouslySetInnerHTML={{__html: data.page.html}} className={styles.main} />
    </div>
    <Footer />
  </div>
  )
}

let Header = ({content}) => {
  return (
    <div className={styles.header}>
      <div>
        <h1>Exercise Classes</h1>
        <p>{content.feature_image_caption}</p>
        <img src={content.feature_image} alt={content.feature_image_alt} className={styles.headerImage} />
      </div>
    </div>
    )
}

export default ExerciseClasses;
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
}
`