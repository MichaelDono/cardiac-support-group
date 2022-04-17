import React from "react"
import { graphql } from "gatsby"
import Seo from '../components/seo'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Breadcrumbs from '../components/breadcrumbs'
import * as styles from './how-to-join.module.css'

import '../components/fonts.css'

const howToJoin =  ({ pageContext, data }) => {
  const { breadcrumb: { crumbs }} = pageContext;
  return (
  <div className={styles.container}>
    <Seo metadata={data.site.siteMetadata} />
    <Navbar />
    <div className={styles.content}>
      <Breadcrumbs crumbs={crumbs} />
      <div dangerouslySetInnerHTML={{__html: data.page.html}}></div>
    </div>
    <Footer />
  </div>
  )
}

export default howToJoin;
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
  }
}
`