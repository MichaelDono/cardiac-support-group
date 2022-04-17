import React from "react"
import { graphql} from "gatsby"
import Seo from '../components/seo'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Breadcrumbs from '../components/breadcrumbs'
import * as styles from './exercise-classes.module.css'

import '../components/fonts.css'

const ExerciseClasses = ({ pageContext, data }) => {
  const { breadcrumb: { crumbs }} = pageContext;
  return (
  <div className={styles.container}>
    <Seo metadata={data.site.siteMetadata} />
    <Navbar />
    <div className={styles.content}>
      <Breadcrumbs crumbs={crumbs} />
       <Header content={data.page} />
      {/*<MainContent content={data.page.frontmatter.main} />
      <Schedule schedule={data.page.frontmatter.schedule} /> */}
      <div dangerouslySetInnerHTML={{__html: data.page.html}} className={styles.main} />
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
        <p>{content.feature_image_caption}</p>
        <img src={content.feature_image} alt={content.feature_image_alt} className={styles.headerImage} />
      </div>
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
    title
    html
    feature_image
    feature_image_alt
    feature_image_caption
  }
}
`