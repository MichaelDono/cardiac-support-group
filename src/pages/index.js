import React from "react"

// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
// import CarouselSplash from '../components/carouselSplash'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import styles from './index.module.css'

import '../bootstrap/css/bootstrap.css';
import '../components/fonts.css'

// const domain = "https://cardiacgroup.netlify.com/";
// const carouselImageQuery = "?nf_resize";
// const ImageParams = "=smartcrop&w=576&h=800";
// const ImageParamsMed = "=smartcrop&w=768&h=960";
// const ImageParamsLarge = "=smartcrop&w=992&h=960";
// const ImageParamsExtraLarge = "=smartcrop&w=1200&h=960";

const Content = ({ children }) => (
  <div className={styles.carouselContent}>
    <div className={styles.caption}>
      {children}
    </div>
  </div>
)

export default ({ data }) => (
<div className={styles.container}>
  <NavBar className={styles.navContainer + " bg-light text-dark"} />
  <Carousel className={styles.content}>
    <Carousel.Item className={styles.carouselImage} style={
        {backgroundImage: `url(img/chair-exercises-for-seniors.jpg)`,
        backgroundPosition: `center`,
        backgroundSize: `cover`}
        } >
          <Content>
            <p>Take part in our fun-filled exercise classes run by our fully qualified instructors.</p>
            {/* <p>A charity run by former heart patients for the support of heart patients</p> */}
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
        <Card.Title>Exercise Classes</Card.Title>
        <Card.Text>
        Exercise classes for you and your Partner or Carer are held at Bede Tower, Burdon Road, Sunderland, SR2 7EA.
        <table className="table table-striped my-3">
          <thead>
            <th>Day</th>
            <th>Time</th>
          </thead>
          <tbody>
          <tr>
            <td>Monday</td>
            <td>10:00 till 11:00</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>10:30 till 11:30</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>10:00 till 11:00</td>
          </tr>
          </tbody>
        </table>
        The Wednesday class is available only 15 weeks following your induction (Inductions are held in Monday and Thursday classes).
        </Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title>How to Join</Card.Title>
        <Card.Text>
          <p>To join you need to complete a GP Referral Form and have it signed by your GP or health professional.</p>
          <p>Please collect a form either by dropping by an exercise class, or call Barry Cook on 0191 5656892.</p>
        </Card.Text>
        <Card.Subtitle>How much does it cost?</Card.Subtitle>
        <Card.Text>
          <p>As a charity we keep any charges and costs to an absolute minimum. Exercise classes are £2 each and it's £2 for a whole year of membership of the group.</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title>Monthly Activities</Card.Title>
        <Card.Text>
          <p>The group holds social meetings on the 2nd Thursday of each month at The Refectory, Ground Floor, Education Centre, Sunderland Royal Hospital</p>
          <p>It runs from 7pm till 9pm with guest speakers, a raffle and refreshments, alongside Bingo if time allows.</p>
        </Card.Text>
      </Card.Body>
    </Card>
  </CardGroup>
  </div>
  <Footer className={styles.footerContainer + " text-white"} />
</div>)