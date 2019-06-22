import { Link } from "gatsby"
import React from "react"
import BackgroundImage from 'gatsby-background-image'
import HeadlineStyles from "./headline.module.css"

import Title from "../components/title"

export default (props) => (
    <BackgroundImage fluid={props.image} className={HeadlineStyles.BackgroundImage}> 
        <div className={HeadlineStyles.Container}>
            <Title>{props.title}</Title>
            <p className={HeadlineStyles.Content}>{props.content}</p>
        </div>
    </BackgroundImage>
  )
