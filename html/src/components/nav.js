import React from "react"
import navStyles from "./nav.module.css"

export default ({children}) => (
    <ul className={navStyles.nav}>{children}</ul>
)
