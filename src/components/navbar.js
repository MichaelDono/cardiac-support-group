import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styles from './navbar.module.css'

export default () => { 
    const [menuVisible, setMenuVisible] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect( () => {
        const resizeListener = () => {
            setIsDesktop(window.innerWidth > 768)
        }

        setIsDesktop(window.innerWidth > 768)
        window.addEventListener('resize', resizeListener)

        return () => {
            window.removeEventListener('resize', resizeListener)
        }
    }, [])

    let handleKeyDown = (event) => {
        const TAB_CHAR_CODE = 9
        if (event.keyCode === TAB_CHAR_CODE) {
            return
        }
        setMenuVisible(!menuVisible)
    }

    return (
        <div className={styles.container}>
            <Link to="/">
                <img src="/img/header.svg"
                    height="46"
                    alt="Sunderland Cardiac Support Group Logo"
                    className="d-inline-block align-top" />
            </Link>
            <div className={styles.slideDownBtn} onClick={() => setMenuVisible(!menuVisible)} onKeyDown={(e) => handleKeyDown(e)} role="button" tabIndex="0">
                <img src="/img/Asset 1.png"
                    height="56"
                    alt="Show navigation links"
                    className="d-inline-block align-top" />
            </div>
            <ul className={(menuVisible || isDesktop) ? styles.expanded : styles.collapsed}>
                <li><Link to="/information-support">Information and Support</Link></li>
                <li><Link to="/information-support/exercise-classes">Exercise Classes</Link></li>
                <li><Link to="/join">How to Join</Link></li>
            </ul>
        </div>
    )

}

// let ToggleButton = () => {
//     return (
        
//     )
// }