import React from 'react';
import styles from './Courses.module.css';
import Course from '../Course/Course';
export default function Courses() {
  return (
    <div className={styles.cont}>
        <div className={styles.headi}>
          <h1>Courses</h1>
        </div>
        <div className={styles.container}>
          <Course courseName="MERN STACK 22SDCS05A" facultyName="KL123"  />
          <Course courseName="Mathematical Programming" facultyName="KL123"/>
          <Course facultyName="KL123" courseName="DBMS" />
          <Course facultyName="KL123" courseName="Network Protocol and Security" />
          <Course facultyName="KL123" courseName="AOOP" />
        </div>
    </div>
  )
}
