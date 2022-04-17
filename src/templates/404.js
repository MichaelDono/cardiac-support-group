import React from "react"
import { graphql} from "gatsby"
import { Link } from "gatsby"
import SEO from '../components/seo'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import * as styles from './index.module.css'

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
            {/* <GatsbyImage image={image} alt="" /> */}
            <img src={data.page.feature_image} alt="Error"/>
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
    page: ghostPage(slug: { eq: $slug }) {
        html
        title
        feature_image
      }
}
`