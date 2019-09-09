import { Link } from "gatsby"
import React from "react"
import navlinkStyles from "./navlink.module.css"

export default (props) => (
    <li className={navlinkStyles.navLink}>
        <Link to={props.linkTo}>
            <h1>{props.text}</h1>
        </Link>
    </li>
  )
