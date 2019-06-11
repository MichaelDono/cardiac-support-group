import React from "react"
import titleStyles from "./title.module.css"

export default ({ children }) => (
  <h1 className={titleStyles.title}>{children}</h1>
)