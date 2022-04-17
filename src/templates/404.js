import React from "react"
import { graphql} from "gatsby"
import { Link } from "gatsby"
import Seo from '../components/seo'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import * as styles from './index.module.css'

import '../components/fonts.css'


const Error404 = ({ data }) => {
    return (
    <div className={styles.container}>
      <Seo metadata={data.site.siteMetadata} />
      <Navbar />
      <div className={styles.lower}>
          <div className={styles.errorContainer}>
            <h1>Something went wrong</h1>
            <Link to="/">Click here to go back home</Link>
            <img src={data.page.feature_image} alt="Error"/>
          </div>
      </div>
      <Footer className={styles.footerContainer} />
    </div>
    )
}

export default Error404;
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