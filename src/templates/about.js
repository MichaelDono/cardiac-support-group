import React from "react"
import { graphql} from "gatsby"
import Seo from '../components/seo'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Breadcrumbs from '../components/breadcrumbs'
import * as styles from './information-support.module.css'

import '../components/fonts.css'

const About = ({ pageContext, data }) => {
  const { breadcrumb: { crumbs }} = pageContext;
  return (
  <div className={styles.container}>
    <Seo metadata={data.site.siteMetadata} />
    <Navbar />
    <div className={styles.content}>
      <Breadcrumbs crumbs={crumbs} />
    </div>
    <Footer className={styles.footerContainer} />
  </div>
  )
}

export default About;
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