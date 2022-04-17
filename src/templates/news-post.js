import React from "react"
import { graphql} from "gatsby"
import Seo from '../components/seo'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Breadcrumbs from '../components/breadcrumbs'
import dateFormatter from '../util/dateFormatter'
import * as styles from './news-post.module.css'

import '../components/fonts.css'

const NewsPost = ({ pageContext, data }) => {
  const { breadcrumb: { crumbs }} = pageContext;
  crumbs[1].crumbLabel = "News";
  crumbs[1].pathname = "/" // delete once news page is created
  if (data.page.title) {
    crumbs[crumbs.length - 1].crumbLabel = data.page.title;
  }

  return (
  <div className={styles.container}>
    <Seo metadata={data.site.siteMetadata} />
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
  const publishDate = dateFormatter(content.published_at);

  return (
    <div className={styles.main}>
      <img src={content.feature_image} alt="Decorative Header" />
      <p>{publishDate}</p>
      <h1>{content.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </div>
  )
}

export default NewsPost;
export const query = graphql`
query($slug: String!) {
  site {
    siteMetadata {
      description
      title
    }
  }
  page: ghostPost(slug: { eq: $slug }) {
    html
    title
    feature_image
    published_at
  }
}
`