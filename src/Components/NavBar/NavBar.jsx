import React from 'react'
import styles from './NavBar.module.css';
import { Link, NavLink } from 'react-router-dom';
export default function NavBar() {
    const style=({isActive})=>{
        return{
        fontWeight: isActive ? '700' : '400',
        color: isActive ? '#38bdf8':'black',
        }
    }
    return (
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div className={styles.container}>
                <div className={styles.logo}>
                    <a href="#"><img src="../images/logo.png" alt="" height='100px' width='100px' /></a>
                </div>
                <div>
                    <ul className={styles.menu}>
                        <li><NavLink >Login</NavLink></li>
                       <li><NavLink to='/' style={style}>Dashboard</NavLink></li>
                       <li><NavLink to='/myCourses' style={style} >My Courses</NavLink></li>
                       <li><NavLink href='#'>My Profile</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}
