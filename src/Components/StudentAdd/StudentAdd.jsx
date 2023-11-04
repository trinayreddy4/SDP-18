import React from 'react';
import styles from './StudentAdd.module.css';
const StudentAdd = () => {
  return (
    <div>
    <div className={styles.secHeading}>
        <h1>Add Student</h1>    
    </div>
    <div className={styles.boxContainer}>
        <form action="/api/addStudent" method='post'>
            <div className={styles.secName}>
              <div>
                  <label className={styles.secnameHead}>Enter Student Name     :</label>
              </div>
              <div>
                    <input type="text" name='name' className={styles.secnametext} />  
              </div>
            </div>
            <div className={styles.secName}>
              <div>
              <label className={styles.secnameHead}>Enter Email Address:</label>
              </div>
              <div>
              <input type="text" name='email' className={styles.secnametext} />
              </div>
            </div>
            
            <div className={styles.secName}>
              <div>
              <label className={styles.secnameHead}>Enter Mobile Number:</label>
              </div>
              <div>
              <input type="text" name='phone' className={styles.secnametext} />
              </div>
            </div>
            
            <div className={styles.secName}>
              <div>
              <label className={styles.secnameHead}>Select Section To Enroll:</label>
              </div>
              <div>
              <input type="text" name='section' className={styles.secnametext} />
              </div>
            </div>
            <input type="submit" className={styles.submibtn} />
        </form>
    </div>
</div>
  )
}

export default StudentAdd
