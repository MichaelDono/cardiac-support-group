import React from "react"
import { graphql} from "gatsby"
import SEO from '../components/seo'
import Footer from '../components/footer'
import Navbar from '../components/header'
import Breadcrumbs from '../components/breadcrumbs'
import StyledButton from '../components/styledButton'
import Img from "gatsby-image/withIEPolyfill"
import styles from './information-support.module.css'

import '../bootstrap/css/bootstrap.css';
import '../components/fonts.css'

export default ({ data }) => {
    return (
    <div className={styles.container}>
      <SEO metadata={data.site.siteMetadata} />
      <Navbar />
      <div className={styles.content}>
        <Breadcrumbs />
        <Header imageFluid={data.page.frontmatter.featuredimage.childImageSharp.fluid}/>
        <div className={styles.exerciseClassesContainer}>
          <div className={styles.exerciseClassesContent}>
            <div className={styles.exerciseClassesBody}>
              <h2 className={styles.exerciseClassesBodyHeader}>Exercise Classes</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique vulputate orci, a pretium dolor varius non. Donec eget aliquam purus, sed scelerisque elit.</p>
              <p>Maecenas nulla neque, consectetur hendrerit blandit a, rutrum vitae diam. Maecenas non aliquam ante. Nulla id placerat lorem. </p>
              <StyledButton variant="outlined" color="#ffffff" align="right" />
            </div>
            <Img fluid={data.page.frontmatter.exerciseClassesImage.childImageSharp.fluid} className={styles.exerciseClassesImage} />
          </div>
        </div>
      </div>
      <Footer className={styles.footerContainer} />
    </div>
    )
}

let Header = ({imageFluid}) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1>Information and Support</h1>
        <p>Cardiac rehab is a vital part of your long term recovery. Read on to find out what support we can offer you.</p>
        <Img fluid={imageFluid} className={styles.headerImage} objectFit="cover" objectPosition="50% 10%"></Img>
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
      featuredimage {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      exerciseClassesImage {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`