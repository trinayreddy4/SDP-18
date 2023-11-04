import React from 'react'
import styles from './Submissions.module.css';
export default function Submissions({event,deadline}) {
  return (
    <div className={styles.cont}>
      <div className={styles.submissions}>
            <div className={styles.submi}>
              <div className={styles.submiicon}>
              <i class="material-symbols-outlined" >
                event
              </i>
              </div>
              <div className={styles.desc}>
                {event}
              </div>
              <div className={styles.deadline}>
                {deadline}
              </div>
            </div>
      </div>
    </div>
  )
}
