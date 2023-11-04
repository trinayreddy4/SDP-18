import React from 'react'
import styles from './Dashboard.module.css'
import Submissions from '../Submissions/Submissions'
import { useAuth } from '../../Utils/Auth'
import { Navigate } from 'react-router-dom'
const Dashboard = () => {
  const auth=useAuth();
  // console.log(!auth?.user)
  if (!auth.user) {
    return <Navigate to="/login" replace />;
  }
  return (
    <>
    <div className={styles.container}>
    <div className={styles.subhead}>
            <h1 >Upcoming Submissions</h1>
    </div>
    <div className={styles.sub}>
      <Submissions event="NPS ALM" deadline="12-11-23"/>
      <br />
      <Submissions event="AOOP ALM" deadline="10-11-23"/>
      <br />
      <Submissions event="MERN ALM" deadline="07-11-23"/>
    </div>
    {/* <div className={styles.subhead}>
            <h1 >Upcoming Exams</h1>
            <br />
    </div> */}
    </div>
  </>
  )
}

export default Dashboard
