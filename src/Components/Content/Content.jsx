import React from 'react';
import styles from './Content.module.css';
export default function Content({content}) {
  return (
    <div className={styles.container}>
        <div className={styles.icon}>
            <img width="35" height="35" src="https://img.icons8.com/ios/50/books.png" alt="books"/>
        </div>
        <div className={styles.conte}>
            {content}
        </div>
    </div>
  )
}
