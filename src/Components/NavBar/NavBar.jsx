import React from 'react'
import styles from './NavBar.module.css';
import { NavLink, useNavigate} from 'react-router-dom';
import { useAuth } from '../../Utils/Auth';
export default function NavBar() {
    const auth=useAuth();
    const navigate=useNavigate();
    const style=({isActive})=>{
        return{
        fontWeight: isActive ? '700' : '400',
        color: isActive ? '#38bdf8':'black',
        }
    }
    const handleLogin=()=>{
            navigate('/login');
    }
    const handleLogout=()=>{
        auth.logout();
        navigate('/login');
    }
    return (
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="../images/logo.png" alt="" height='100px' width='100px' />
                </div>
                <div>
                    <ul className={styles.menu}>
                    {auth.user ? (
                        <>
                      <li><button className={styles.logoutbtn} onClick={handleLogout}>Sign Out</button></li>
                      <li><NavLink to='/' style={style}>Dashboard</NavLink></li>
                      <li><NavLink to='/myCourses' style={style} >My Courses</NavLink></li>   
                      </>
                      ) : (
                       <li><button className={styles.logoutbtn} onClick={handleLogin}>Sign In</button></li> 
                        )}
                       <li><NavLink href='#'>About</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}
