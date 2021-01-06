import React from "react"
import { graphql} from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import SEO from '../components/seo'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Breadcrumbs from '../components/breadcrumbs'
import dateFormatter from '../util/dateFormatter'
import styles from './news-post.module.css'

import '../bootstrap/css/bootstrap.css';
import '../components/fonts.css'

export default ({ pageContext, data }) => {
  const { breadcrumb: { crumbs }} = pageContext;
  crumbs[1].crumbLabel = "News";
  crumbs[1].pathname = "/" // delete once news page is created
  if (data.page.frontmatter.title) {
    crumbs[crumbs.length - 1].crumbLabel = data.page.frontmatter.title;
  }

  return (
  <div className={styles.container}>
    <SEO metadata={data.site.siteMetadata} />
    <Navbar />
    <div className={styles.content}>
      <Breadcrumbs crumbs={crumbs} />
      <Article content={data.page} />
    </div>
    <Footer />
  </div>
  )
}

let Article = ({content}) => {
  const publishDate = dateFormatter(content.frontmatter.datetime);

  return (
    <div className={styles.main}>
      <FeaturedImage post={content.frontmatter} />
      <p>{publishDate}</p>
      <h1>{content.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </div>
  )
}

let FeaturedImage = ({post}) => {
  if (post.featuredimage) {
    return (
      <Img fluid={post.featuredimage.childImageSharp.fluid} className={styles.headerImage} objectFit="cover" objectPosition="50% 10%" />
      )
  } else {
    return null;
  }
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
    html
    frontmatter {
      title
      datetime
      featuredimage {
        childImageSharp {
          fluid(maxWidth: 1440, maxHeight: 960) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
}
`