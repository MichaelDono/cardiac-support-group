import React from "react"
import { graphql} from "gatsby"
import Seo from '../components/seo'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Breadcrumbs from '../components/breadcrumbs'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from './exercise-classes.module.css'
import {Link} from 'gatsby'

import '../components/fonts.css'

const ExerciseClasses = ({ pageContext, data }) => {
  const { breadcrumb: { crumbs }} = pageContext;
  return (
  <div className={styles.container}>
    <Seo metadata={data.site.siteMetadata} />
    <Navbar />
    <div className={styles.content}>
      <Breadcrumbs crumbs={crumbs} />
      {/* <Header content={data.page.frontmatter.featured} />
      <MainContent content={data.page.frontmatter.main} />
      <Schedule schedule={data.page.frontmatter.schedule} /> */}
      <div dangerouslySetInnerHTML={{__html: data.page.html}}></div>
    </div>
    <Footer />
  </div>
  )
}




let Header = ({content}) => {
  const image = getImage(content.image.url);
  return (
    <div className={styles.header}>
      <div>
        <h1>Exercise Classes</h1>
        <p>{content.body}</p>
        <GatsbyImage image={image} alt="" className={styles.headerImage} objectFit="cover" objectPosition="50% 10%" />
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

export default ExerciseClasses;
export const query = graphql`
query($slug: String!) {
  site {
    siteMetadata {
      description
      title
    }
  }
  page: ghostPage(slug: { eq: $slug }) {
    feature_image
    html
    title
  }
}
`