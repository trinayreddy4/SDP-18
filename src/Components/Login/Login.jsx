import React, { useState } from 'react';
import styles from './Login.module.css';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useAuth } from '../../Utils/Auth';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [userName,setUsername]=useState('');
  const [password,setPassword]=useState('');  
  const auth=useAuth();
  const navigate=useNavigate();
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];
  const handleClick=(e)=>{
    e.preventDefault();

  var { uname, pass } = document.forms[0];
  const userData = database.find((user) => user.username === userName);
  if (userData) {
    if (userData.password !== password) {
      
      alert("Incorrect Password");
    } else {
        auth.login(userName,password);
        navigate('/');    
    }
  } else {
    alert("User not found")
  }
     }
  
  

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
                                <TextField 
                                id="standard-size-normal"  
                                label="Username" 
                                variant="standard" 
                                onChange={(e)=>{
                                  setUsername(e.target.value);
                                }}
                                />
                                </div>
                                <div>
                                <TextField 
                                id="standard-size-normal"  
                                label="Password" 
                                variant="standard" 
                                type='password' 
                                onChange={(e)=>{
                                  setPassword(e.target.value);
                                }}
                                />
                                </div>
                                <div>
                                    <button className={styles.subbtn} onClick={handleClick}>
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
