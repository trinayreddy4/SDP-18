import React from 'react'
import styles from './Dashboard.module.css'
import Submissions from '../Submissions/Submissions'
const Dashboard = () => {
  return (
    <>
    <div className={styles.container}>
    <div className={styles.subhead}>
            <h1 >Upcoming Submissions</h1>
            <br />
    </div>
    <div className={styles.sub}>
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
