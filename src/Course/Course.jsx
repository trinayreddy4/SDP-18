import React from 'react';
import styles from './Course.module.css';
export default function Course({courseName,facultyName}) {
  return (
    <div className={styles.container}>
        <div className={styles.courseHead}>
            <a href='#'>{courseName}</a>
        </div>
        <div className={styles.facultyname}>
           <h4>Faculty:  {facultyName}</h4>
        </div>
        <div className={styles.coursebtncontainer}>
            <button className={styles.btn}>Click To View Course</button>
        </div>
    </div>
  )
}
