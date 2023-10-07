import React from 'react';
import styles from './Unauthorized.module.css';
const Unauthorized = () => {
  return (
    <div className={styles.container}>
      <div className={styles.AttentionBox}>
        <h1>Attention!</h1>
      </div>
      <h1>You Are Not Authorized <br />To Use This Feature </h1>
    </div>
  )
}

export default Unauthorized
