import React from "react"
import { Link } from "gatsby"
import classNames from 'classnames/bind';
import styles from './styledButton.module.css'

let cx = classNames.bind(styles);

export default (props) => { 
    let btnClass = cx(  
        'button',
        getVariant(props.variant));

    let buttonStyle = {
        color: (props.color ?? "#3A4A50"),
        float: (props.align === "right" ? 'right' : 'none'),
        borderColor: (props.color ?? "#3A4A50")
        
    }
    return (
        <div className={styles.container} >
            <Link to={props.linkTo ?? "/information-support"} className={btnClass} style={buttonStyle}>
                <span>Learn More</span>
            </Link>
        </div>
    )

}

function getVariant(variant) {
    return (['contained', 'outlined', 'text'].includes(variant) ? variant : 'contained');
}