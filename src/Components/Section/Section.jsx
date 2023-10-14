import React from 'react'
import styles from './Section.module.css'
import { TextField } from '@mui/material'
const Section = () => {
  return (
    <div>
        <div className={styles.secHeading}>
            <h1>Add Section</h1>    
        </div>
        <div className={styles.boxContainer}>
            <form action="">
                <div className={styles.secName}>
                  <div>
                      <label className={styles.secnameHead}>Enter Section Name     :</label>
                  </div>
                  <div>
                        <input type="text" className={styles.secnametext} />  
                  </div>
                </div>
                <div className={styles.secName}>
                  <div>
                  <label className={styles.secnameHead}>Select Faculty for MSWD:</label>
                  </div>
                  <div>
                  <input type="text" className={styles.secnametext} />
                  </div>
                </div>
                
                <div className={styles.secName}>
                  <div>
                  <label className={styles.secnameHead}>Select Faculty for NPS:</label>
                  </div>
                  <div>
                  <input type="text" className={styles.secnametext} />
                  </div>
                </div>
                
                <div className={styles.secName}>
                  <div>
                  <label className={styles.secnameHead}>Select Faculty for AOOP:</label>
                  </div>
                  <div>
                  <input type="text" className={styles.secnametext} />
                  </div>
                </div>
                
                <div className={styles.secName}>
                  <div>
                  <label className={styles.secnameHead}>Select Faculty for DBMS:</label>
                  </div>
                  <div>
                  <input type="text" className={styles.secnametext} />
                  </div>
                </div>
                
                <div className={styles.secName}>
                  <div>
                  <label className={styles.secnameHead}>Select Faculty for MP:</label>
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

export default Section
