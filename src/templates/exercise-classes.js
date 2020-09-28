import React from "react"
import { graphql} from "gatsby"
import SEO from '../components/seo'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Breadcrumbs from '../components/breadcrumbs'
import Img from "gatsby-image/withIEPolyfill"
import styles from './exercise-classes.module.css'
import {Link} from 'gatsby'

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
      <Schedule schedule={data.page.frontmatter.schedule} />
    </div>
    <Footer />
  </div>
  )
}

let Header = ({content}) => {
  return (
    <div className={styles.header}>
      <div>
        <h1>Exercise Classes</h1>
        <p>{content.body}</p>
        <Img fluid={content.image.url.childImageSharp.fluid} className={styles.headerImage} objectFit="cover" objectPosition="50% 10%" />
      </div>
    </div>
    )
}

let MainContent = ({content}) => {
  return (
    <div className={styles.main}>
      {content.map( entry => (
        <div>
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

let Schedule = ({schedule}) => {
  return (
    <div className={styles.main}>
      <h2>When are classes held?</h2>
      <p>Exercise classes take place on Mondays, Wednesdays and Thursdays. Please check the table below for our current schedule.</p>
      <table className={styles.table + " table table-bordered my-3"}>
        <thead>
          <th>Day</th>
          <th>Times</th>
        </thead>
        <tbody>
          {schedule.map((entry, i) => {
            return entry.sessions.map((session, index) => 
              index === 0 ? (
              <tr>
                <td rowSpan={entry.sessions.length} key={i}>{entry.day}</td>
                <td key={index}>{session}</td>
              </tr>
              ) : (
              <tr>
                <td key={index}>{session}</td>
              </tr>
              ))
            })
          }
        </tbody>
      </table>
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
      schedule {
        day
        sessions
      }
      featured {
        body
        image {
          alt
          url {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      main {
        heading
        body
        links {
          url
          text
        }
      }
    }
  }
}
`