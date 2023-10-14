import React from 'react';
import styles from './Content.module.css';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../Utils/Auth';
export default function Content({content}) {
  // const navigate=useNavigate();
  // const auth=useAuth();

  
  return (
    <div className={styles.container} >
        <div className={styles.icon}>
            <img width="35" height="35" src="https://img.icons8.com/ios/50/books.png" alt="books"/>
        </div>
        <div className={styles.conte}>
            {content}
        </div>
    </div>
  )
}
