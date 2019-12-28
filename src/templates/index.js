import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
// import CarouselSplash from '../components/carouselSplash'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../pages/index.module.css'

import '../bootstrap/css/bootstrap.css';
import '../components/fonts.css'

const Content = ({ children }) => (
    <div className={styles.carouselContent}>
      <div className={styles.caption}>
        {children}
      </div>
    </div>
  )

export default ({ data }) => {
    //const content = data.markdownRemark;
    return (
    <div className={styles.container}>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="description" content={data.site.siteMetadata.description}></meta>
      </Helmet>
      <NavBar className={styles.navContainer + " bg-light text-dark"} />
      <Carousel className={styles.content}>
        <Carousel.Item className={styles.carouselImage} style={
            {backgroundImage: `url(img/chair-exercises-for-seniors.jpg)`,
            backgroundPosition: `center`,
            backgroundSize: `cover`}
            } >
              <Content>
                <p>Take part in our fun-filled exercise classes run by our fully qualified instructors.</p>
              </Content>
        </Carousel.Item>
        <Carousel.Item className={styles.carouselImage} style={
            {backgroundImage: `url(img/walking.jpeg)`,
            backgroundPosition: `center`,
            backgroundSize: `cover`}
            } >
              <Content>
                <p>Join one of our affordable summer day trips.</p>
              </Content>
        </Carousel.Item>
        <Carousel.Item className={styles.carouselImage} style={
            {backgroundImage: `url(img/cafe.jpeg)`,
            backgroundPosition: `center`,
            backgroundSize: `cover`}
            } >
              <Content>
                <p>Come along to our monthly relaxed and informal social evenings.</p>
              </Content>
        </Carousel.Item>
      </Carousel>
      <div className={styles.lower}>
      <CardGroup className={styles.card}>
        <Card>
          <Card.Body>
            <Card.Title>How to Join</Card.Title>
            <Card.Subtitle>GP Referral</Card.Subtitle>
            <Card.Text>
              <p>For non hospital referred patients all that is needed is a completed GP referral form, signed by your healthcare professional.
              Please collect a form either by dropping by an exercise class, or contact us as below.</p>
            </Card.Text>
            <Card.Subtitle>Hospital Referral</Card.Subtitle>
            <Card.Text>
              <p>Hospital referred patients only need to bring their completed hospital-provided referral form.
              Initially, you can attend only Monday and Thursday exercise classes.</p>
            </Card.Text>
            <Card.Subtitle>How much does it cost?</Card.Subtitle>
            <Card.Text>
              <p>As a charity we keep any charges and costs to an absolute minimum. Exercise classes are £2 each and it's £2 for a whole year of membership of the group.</p>
            </Card.Text>
            <Card.Subtitle>Contact Us</Card.Subtitle>
            <Card.Text>
              <p>You can reach Barry Cook (Secretary) on 0191 5656892, or James Baker (Chairman) on 0191 5226750.</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Activities</Card.Title>
            <Card.Subtitle>Exercise Classes</Card.Subtitle>
            <Card.Text>
            Our exercise classes are structured to suit your needs and ability. They are held at <a href="https://goo.gl/maps/Px9E6h3eVCryLMLW6">Bede Tower, Burdon Road, Sunderland, SR2 7EA</a>.
    
            <table className="table table-bordered my-3">
              <thead>
                <th>Day</th>
                <th>Times</th>
              </thead>
              <tbody>
              <tr>
                <td rowSpan="2">Monday</td>
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
                <td rowSpan="2">Thursday</td>
                <td>10:00 - 11:00</td>
              </tr>
              <tr>
                  <td>11:15 - 12:15</td>
              </tr>
              </tbody>
            </table>
            </Card.Text>
            <Card.Subtitle>Monthly Socials</Card.Subtitle>
            <Card.Text>
              The group holds free social meetings on the 2nd Thursday of each month at The Refectory,
               Ground Floor, Education Centre, Sunderland Royal Hospital.<br/>
              It runs from 7pm till 9pm with guest speakers, a raffle and refreshments, alongside Bingo if time allows.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
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
      heading
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