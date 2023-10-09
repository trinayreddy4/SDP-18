import React from 'react';
import styles from './Course.module.css';
import { Link } from 'react-router-dom';
export default function Course({courseName,facultyName}) {
  let url;
  if(courseName==="MERN STACK 22SDCS05A")
  {
    url=`mswd`;
  }
  else if(courseName==="Mathematical Programming")
  {
    url=`mp`;
  }
  else
  {
    url='dbms'
  }
  return (
    <div className={styles.container}>
        <div className={styles.courseHead}>
            <Link 
            to='/myCourses/`${url}`'
            >{courseName}</Link>
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
