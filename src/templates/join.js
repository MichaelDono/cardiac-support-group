import React from "react"
import { graphql} from "gatsby"
import SEO from '../components/seo'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Breadcrumbs from '../components/breadcrumbs'
import styles from './join.module.css'

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
    </div>
    <Footer />
  </div>
  )
}

let Header = ({content}) => {
  return (
    <div className={styles.header}>
      <div>
        <h1>How to Join</h1>
        <p>{content.body}</p>
      </div>
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
  page: markdownRemark(fields: { slug: { eq: $slug } }) {
    frontmatter {
      featured {
        body
      }
      main {
        heading
        body
      }
    }
  }
}
`