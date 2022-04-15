import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from '../components/seo'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Breadcrumbs from '../components/breadcrumbs'
import * as styles from './how-to-join.module.css'

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
      {/* <Header content={data.page.frontmatter.featured} />
      <MainContent content={data.page.frontmatter.main} /> */}
      <div dangerouslySetInnerHTML={{__html: data.page.html}}></div>
    </div>
    <Footer />
  </div>
  )
}

let Header = ({content}) => {
  const image = getImage(content.image)
  return (
    <div className={styles.header}>
      <div>
        <h1>How to Join</h1>
        <p>{content.body}</p>
        <GatsbyImage image={image} className={styles.headerImage} objectFit="cover" objectPosition="50% 100%" />
      </div>
    </div>
    )
}

let MainContent = ({content}) => {
  return (
    <div className={styles.main}>
      {content.map( (entry, index) => (
        <div key={index}>
          <h2>{entry.heading}</h2>
          <p>{entry.body}</p>
          {entry.links && 
          <div className={"mb-3"}>
            <Link to={entry.links.url}>{entry.links.text}</Link>
          </div>}
        </div>
      ))}
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
  }
}
`