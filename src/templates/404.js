import React from "react"
import { graphql} from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import SEO from '../components/seo'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import styles from './index.module.css'

import '../components/fonts.css'

export default ({ data }) => {
    //const image = getImage(data.page.frontmatter.featured.image);
    return (
    <div className={styles.container}>
      <SEO metadata={data.site.siteMetadata} />
      <Navbar />
      <div className={styles.lower}>
          <div className={styles.errorContainer}>
            <h1>Something went wrong</h1>
            <Link to="/">Click here to go back home</Link>
            {/* <GatsbyImage image={image} alt="" /> */}
          </div>
      </div>
      <Footer className={styles.footerContainer} />
    </div>
    )
}

export const query = graphql`
query {
    site {
        siteMetadata {
            description
            title
        }
    }
}
`