import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'
const Header = () => {
    return (
        <div className={styles.header}>
            <Link href="/">
                <img src={"/logo.png"} className={styles.logo}/>
            </Link>
            <div className={styles.nav}>
                <Link href="/">
                    <a>Inicio</a>
                </Link>
            </div>
            <div className={styles.navlinks}>
                <img src={"/search.png"} />
                <Link href="/login">
                    <a>
                        <img src={"/login.png"} />
                    </a>
                </Link>
            </div>

        </div>
    )
}

export default Header
