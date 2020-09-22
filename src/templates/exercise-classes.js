import React from "react"
import { graphql} from "gatsby"
import SEO from '../components/seo'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Breadcrumbs from '../components/breadcrumbs'
import Img from "gatsby-image/withIEPolyfill"
import styles from './exercise-classes.module.css'

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
      <MainContent content={data.page.frontmatter.main} />
      <div className={styles.main}>
        <div>
          <table className={"table table-bordered my-3"}>
            <thead>
              <th>Day</th>
              <th>Times</th>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2">Monday</td>
                <td>10:00 - 11:00</td>
              </tr>
              <tr>
                <td>11:15 - 12:15</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>10:30 - 11:30</td>
              </tr>
              <tr>
                <td rowspan="2">Thursday</td>
                <td>10:00 - 11:00</td>
              </tr>
              <tr>
                <td>11:15 - 12:15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Footer className={styles.footerContainer} />
  </div>
  )
}

let Header = ({content}) => {
  return (
    <div className={styles.header}>
      <div>
        <h1>Exercise Classes</h1>
        <p>{content.body}</p>
        <Img fluid={content.image.url.childImageSharp.fluid} className={styles.headerImage} objectFit="cover" objectPosition="50% 10%"></Img>
      </div>
    </div>
    )
}

let MainContent = ({content}) => {
  return (
    <div className={styles.mainContent}>
      {content.map( entry => (
        <div>
          <h2>{entry.heading}</h2>
          <p>{entry.body}</p>
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
  page: markdownRemark(fields: { slug: { eq: $slug } }) {
    frontmatter {
      times {
        Monday
        Tuesday
        Wednesday
        Thursday
        Friday
        Saturday
        Sunday
      }
      featured {
        body
        image {
          alt
          url {
            childImageSharp {
              fluid(maxWidth: 750) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      main {
        heading
        body
      }
    }
  }
}
`