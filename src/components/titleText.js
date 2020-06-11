import React from 'react';
import styles from './titleText.module.css'

export default (props) => { 
    return (
    
    <> 
    <a href="/" className={styles.hidden}>
        <span>{props.children}</span>
    </a>
    <a href="/" className={styles.container}>
        <span>{props.children}</span>
    </a>
    </>
    );
}