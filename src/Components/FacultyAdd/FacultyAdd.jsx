import React from 'react';
import styles from './FacultyAdd.module.css';
const FacultyAdd = () => {
  return (
    <div>
    <div className={styles.secHeading}>
        <h1>Add Faculty</h1>    
    </div>
    <div className={styles.boxContainer}>
        <form action="">
            <div className={styles.secName}>
              <div>
                  <label className={styles.secnameHead}>Enter Faculty Name     :</label>
              </div>
              <div>
                    <input type="text" className={styles.secnametext} />  
              </div>
            </div>
            <div className={styles.secName}>
              <div>
              <label className={styles.secnameHead}>Enter Email Address:</label>
              </div>
              <div>
              <input type="text" className={styles.secnametext} />
              </div>
            </div>
            
            <div className={styles.secName}>
              <div>
              <label className={styles.secnameHead}>Enter Mobile Number:</label>
              </div>
              <div>
              <input type="text" className={styles.secnametext} />
              </div>
            </div>
            
            <div className={styles.secName}>
              <div>
              <label className={styles.secnameHead}>Enter Employee ID:</label>
              </div>
              <div>
              <input type="text" className={styles.secnametext} />
              </div>
            </div>
            <input type="submit" className={styles.submibtn} />
        </form>
    </div>
</div>
  )
}

export default FacultyAdd
