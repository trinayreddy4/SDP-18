import React from 'react'
import styles from './NavBar.module.css';
export default function NavBar() {
  return (
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div className={styles.container}>
                <div className={styles.logo}>
                    <a href="#"><img src="../images/logo.png" alt="" height='100px' width='100px' /></a>
                </div>
                <div>
                    <ul className={styles.menu}>
                        <li><a href="#">Login</a></li>
                       <li><a href='#'>Dashboard</a></li>
                       <li><a href='#'>My Courses</a></li>
                       <li><a href='#'>My Profile</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}
