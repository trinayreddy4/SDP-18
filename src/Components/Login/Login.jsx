import React from 'react';
import styles from './Login.module.css';
import { TextField } from '@mui/material';
export default function Login() {
    
  return (
    <>
        <div className={styles.loginContainer}>
            <div className={styles.login}>
                <div className={styles.loginText}>
                    <div className={styles.outerheadings}>
                        <h1>
                            On The Way To
                            <div className={styles.innerheadings}>
                                 <span>
                                    Learning <br/>
                                    Masterning <br/>
                                    Developing <br/>
                                    Accomplish <br/>
                                </span>                               
                            </div>    
                        </h1>                        
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
