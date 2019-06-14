import React from "react"
import navStyles from "./nav.module.css"
import '../bootstrap/css/bootstrap.css';

export default ({children}) => (
    <nav className={navStyles.nav + " navbar"}>{children}</nav>
)
