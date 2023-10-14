import React from 'react'
import styles from './GradesAssign.module.css'
const GradesAssign = () => {
  return (
    <div>
    <div className={styles.secHeading}>
        <h1>Set Grades</h1>    
    </div>
    <div className={styles.boxContainer}>
        <form action="">
            <div className={styles.secName}>
              <div>
                  <label className={styles.secnameHead}>Select Student Name     :</label>
              </div>
              <div>
                    <input type="text" className={styles.secnametext} />  
              </div>
            </div>
            
            <div className={styles.secName}>
              <div>
              <label className={styles.secnameHead}>Enter Grade Points:</label>
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

export default GradesAssign
