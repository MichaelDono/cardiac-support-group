import React from "react"
import { graphql, Link } from "gatsby"
import SEO from '../components/seo'
import Footer from '../components/footer'
import Alert from 'react-bootstrap/Alert'
import Header from '../components/header'
import News from '../components/news'
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
          Our exercise classes and other activities are still on hold following government guidelines. 
          Our funding is secure, and we will reinstate them once we are confident that the appropriate 
          measures have been implemented to ensure your health and wellbeing.
          </p>
          <p className="mb-2">
          Once again, despite some charities closing due to financial pressures, the group is not in 
          that position and The Trustees look forward to seeing you all again in the future.
          </p>
          <p className="mb-2">
          We will contact our members in due course – should you wish to contact us please contact 
          Barry on 0191 5656892 or Jim on 0191 5226750.
          </p>
          <p>
          Thank you and stay safe.
          </p>
          <hr />
          <Alert.Link href="https://www.bhf.org.uk/informationsupport/heart-matters-magazine/news/coronavirus-and-your-health">Coronavirus: what it means for you if you have heart or circulatory disease.</Alert.Link>
        </Alert>
        <News image={frontmatter.image} />
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