import React from "react"
import { graphql} from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import { Link } from "gatsby"
import SEO from '../components/seo'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import styles from './index.module.css'

import '../bootstrap/css/bootstrap.css';
import '../components/fonts.css'

export default ({ data }) => {
    return (
    <div className={styles.container}>
      <SEO metadata={data.site.siteMetadata} />
      <Navbar />
      <div className={styles.lower}>
          <div className={styles.errorContainer}>
            <h1>Something went wrong</h1>
            <Link to="/">Click here to go back home</Link>
            <Img fluid={data.page.frontmatter.featured.image.url.childImageSharp.fluid} />
          </div>
      </div>
      <Footer className={styles.footerContainer} />
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
                image {
                    url {
                        childImageSharp {
                            fluid(maxWidth: 1200) {
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