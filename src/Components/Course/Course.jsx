import React from 'react';
import styles from './Course.module.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
export default function Course({courseName,facultyName}) {
  const navigate=useNavigate();
  const HandleClick=(e)=>{
      e.preventDefault();
      navigate(`/mycourses/${url}`);
  }
  let url;
  if(courseName==="MERN STACK 22SDCS05A")
  {
    url='mswd';
  }
  else if(courseName==="Mathematical Programming")
  {
    url='mp';
  }
  else if(courseName==="Mathematical Programming")
  {
    url='dbms';
  }
  else if(courseName==="Network Protocol and Security")
  {
    url='nps';
  }
  else
  {
    url='aoop';
  }
  return (
    <div className={styles.container}>
        <div className={styles.courseHead}>
            <Link 
            to={`/mycourses/${url}`}
            >{courseName}</Link>
        </div>
        <div className={styles.facultyname}>
           <h4>Faculty:  {facultyName}</h4>
        </div>
        <div className={styles.coursebtncontainer}>
            <button className={styles.btn} onClick={HandleClick}>Click To View Course</button>
        </div>
    </div>
  )
}
