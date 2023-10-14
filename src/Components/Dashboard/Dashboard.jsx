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
      <Submissions/>
      <br />
      <Submissions/>
      <br />
      <Submissions/>
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
