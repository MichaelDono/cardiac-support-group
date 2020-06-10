import React from "react"
import { graphql, Link } from "gatsby"
import SEO from '../components/seo'
import Footer from '../components/footer'
import Alert from 'react-bootstrap/Alert'
import Header from '../components/header'
import NewsItem from '../components/newsItem'
import CallToAction from '../components/cta'
import styles from '../pages/index.module.css'

import '../bootstrap/css/bootstrap.css';
import '../components/fonts.css'

export default ({ data }) => {
    const frontmatter = data.markdownRemark.frontmatter;
    return (
    <div className={styles.container}>
      <SEO metadata={data.site.siteMetadata} />
      <Header />
      <div className={styles.lower}>
        <CallToAction />
        <Alert variant={'primary'} className={styles.alert}>
          <Alert.Heading>Coronavirus (COVID-19)</Alert.Heading>
          <p className="mb-2">
          Our Exercise sessions are still on hold following government guidelines. 
          When it is safe to resume, we will contact all members who attend the sessions and give further information.
          </p>
          <p className="mb-2">
            For any more information please contact Barry on 0191 5656892 or Jim on 0191 5226750.
          </p>
          <p>
            Thank you.
          </p>
          <hr />
          <Alert.Link href="https://www.bhf.org.uk/informationsupport/heart-matters-magazine/news/coronavirus-and-your-health">Coronavirus: what it means for you if you have heart or circulatory disease.</Alert.Link>
        </Alert>
        <div className={styles.newsEvents}>
          <h2>News and Events</h2>
          <div className={styles.newsItems}>
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </div>
          <div className={styles.viewAll}>View All Articles</div>
        </div>
      </div>
      <Footer className={styles.footerContainer} />
    </div>
    )
}

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    frontmatter {
      title
      carousel {
        imageUrl
        text
      }
    }
  }
  site {
    siteMetadata {
      description
      title
    }
  }
}
`