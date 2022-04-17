import React from 'react';
import * as styles from './titleText.module.css'

const TitleText = (props) => { 
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

export default TitleText;