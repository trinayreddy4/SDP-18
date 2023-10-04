import React from 'react';
import styles from './Login.module.css';
import { TextField } from '@mui/material';
export default function Login() {
    
  return (
    <>
        <div className={styles.loginContainer}>
            <div className={styles.login}>
                <div className={styles.loginText}>
                    <div>
                    <h1>On The Way To<br/> Learning</h1>
                    </div>
                </div>
                <div className={styles.form}>
                    <div className={styles.formContainer}>
                        <form>
                            <div className={styles.formInput}>
                                <div>
                                <TextField id="standard-size-normal"  label="Username" variant="standard" />
                                </div>
                                <div>
                                <TextField id="standard-size-normal"  label="Password" variant="standard" />
                                </div>
                                <div>
                                    <button className={styles.subbtn}>
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
