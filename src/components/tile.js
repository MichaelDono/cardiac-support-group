import React from "react"
import { Link } from "gatsby"
import StyledButton from './styledButton'
import styles from './tile.module.css'

export default (props) => { 
    const title = props.title || "Exercise Classes";
    const imageUrl = props.imageUrl || "img/walking_1.png";
    let color = props.color || "#C7E2EC";
    let backgroundColorStyle = {
        backgroundColor: props.backgroundColor || "#C7E2EC",
        color: color
    };
    return (
        <div className={styles.container} style={backgroundColorStyle}>
            <h1>{title}</h1>
            <p className={styles.bodyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget sagittis eros. Proin vel sollicitudin nulla.</p>
            
            <div className={styles.imgContainer}>
                <img src={imageUrl}></img>
            </div>
            <StyledButton align="right" color={color} variant="outlined" />
        </div>
    )

}