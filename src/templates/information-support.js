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
      <ExerciseClasses content={data.page.frontmatter.exerciseClasses} />
      <MainContent content={data.page.frontmatter.main} />
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

let ExerciseClasses = ({content}) => {
  return (
    <div className={styles.exerciseClasses}>
        <div>
          <h2>Exercise Classes</h2>
          <p>{content.body}</p>
          <StyledButton variant="outlined" color="#ffffff" align="right" linkTo={"exercise-classes"} />
        </div>
        <Img fluid={content.imageUrl.childImageSharp.fluid} className={styles.exerciseClassesImage} />
    </div>
  )
}

let MainContent = ({content}) => {
  return (
    <div className={styles.mainContent}>
      <div>
        <h2>Day Trips</h2>
        <Img fluid={content.dayTrips.imageUrl.childImageSharp.fluid} />
        <p>{content.dayTrips.body}</p>
      </div>
      <div>
      <h2>Walks</h2>
        <Img fluid={content.walks.imageUrl.childImageSharp.fluid} />
        <p>{content.walks.body}</p>
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
      main {
        dayTrips {
          body
          imageUrl {
            childImageSharp {
              fluid(maxWidth: 750) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        walks {
          body
          imageUrl {
            childImageSharp {
              fluid(maxWidth: 750) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
}
`