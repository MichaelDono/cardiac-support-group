import React from 'react';
import styles from './titleText.module.css'

export default (props) => { 
    return (
    
    <> 
    <div className={styles.hidden}>
        <span>{props.children}</span>
    </div>
    <div className={styles.container}>
        <span>{props.children}</span>
    </div>
    </>
    );
}