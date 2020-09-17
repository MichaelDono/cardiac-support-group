import React from "react"
import { graphql} from "gatsby"
import SEO from '../components/seo'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Breadcrumbs from '../components/breadcrumbs'
import StyledButton from '../components/styledButton'
import Img from "gatsby-image/withIEPolyfill"
import styles from './information-support.module.css'

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
      <div className={styles.exerciseClassesContainer}>
        <div className={styles.exerciseClassesContent}>
          <div className={styles.exerciseClassesBody}>
            <h2 className={styles.exerciseClassesBodyHeader}>Exercise Classes</h2>
            <p>{data.page.frontmatter.exerciseClasses.body}</p>
            <StyledButton variant="outlined" color="#ffffff" align="right" />
          </div>
          <Img fluid={data.page.frontmatter.exerciseClasses.imageUrl.childImageSharp.fluid} className={styles.exerciseClassesImage} />
        </div>
      </div>
    </div>
    <Footer className={styles.footerContainer} />
  </div>
  )
}

let Header = ({content}) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1>Information and Support</h1>
        <p>{content.body}</p>
        <Img fluid={content.imageUrl.childImageSharp.fluid} className={styles.headerImage} objectFit="cover" objectPosition="50% 10%"></Img>
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
      title
      featured {
        body
        imageUrl {
          childImageSharp {
            fluid(maxWidth: 1440, maxHeight: 960) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      exerciseClasses {
        imageUrl {
          childImageSharp {
            fluid(maxWidth: 750) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        body
      }
    }
  }
}
`