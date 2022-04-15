import React from "react"
import StyledButton from './styledButton'
import * as styles from './tile.module.css'

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
            <p className={styles.bodyText}>{props.children || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget sagittis eros. Proin vel sollicitudin nulla."}</p>
            
            <div className={styles.imgContainer}>
                <img src={imageUrl} height="230" alt="" ></img>
            </div>
            <StyledButton align="right" color={color} variant="outlined" linkTo={props.linkTo ?? "information-support/"} />
        </div>
    )

}