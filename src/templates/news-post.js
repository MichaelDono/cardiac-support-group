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
  crumbs[1].crumbLabel = "News";
  if (data.page.frontmatter.title) {
    crumbs[crumbs.length - 1].crumbLabel = data.page.frontmatter.title;
  }

  return (
  <div className={styles.container}>
    <SEO metadata={data.site.siteMetadata} />
    <Navbar />
    <div className={styles.content}>
      <Breadcrumbs crumbs={crumbs} />
      <div dangerouslySetInnerHTML={{ __html: data.page.html }} />
    </div>
    <Footer />
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
    html
    frontmatter {
      title
      datetime
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
`