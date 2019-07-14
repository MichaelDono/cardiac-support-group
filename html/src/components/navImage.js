import { Link } from "gatsby"
import React from "react"
import navlinkStyles from "./navlink.module.css"

export default (props) => (
    <li className={navlinkStyles.navLink}>
        <Link to={props.linkTo}>
            <img className={navlinkStyles.navImage}
                alt=""
                src={props.imageURL} />
            <p className={navlinkStyles.slogan}>Sunderland Cardiac Support Group</p>
        </Link>
    </li>
  )
