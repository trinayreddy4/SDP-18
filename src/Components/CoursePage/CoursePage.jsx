import React from 'react';
import styles from './CoursePage.module.css';
import Content from '../Content/Content';
import { useAuth } from '../../Utils/Auth';
import { Navigate } from 'react-router-dom';
export default function CoursePage({courseName}) {
    const auth=useAuth();
  // console.log(!auth?.user)
  if (!auth.user) {
    return <Navigate to="/login" replace />;
  }
    return (
    <div className={styles.container}>
      <div className={styles.courseHead}>
           <h1>{courseName}</h1>
      </div>
      <div className={styles.courseItems}>
            <div className={styles.coHead}>
                <h2>CO1</h2>
            </div>
            <div className={styles.content}>
                <Content content="Handout"/>
                <Content content="SLM"/>
                <Content content="Quiz"/>
            </div>
            <div className={styles.coHead}>
                <h2>CO2</h2>
            </div>
            <div className={styles.content}>
                <Content content="Handout"/>
                <Content content="SLM"/>
                <Content content="Quiz"/>
            </div>
            <div className={styles.coHead}>
                <h2>CO3</h2>
            </div>
            <div className={styles.content}>
                <Content content="Handout"/>
                <Content content="SLM"/>
                <Content content="Quiz"/>
            </div>
            <div className={styles.coHead}>
                <h2>CO4</h2>
            </div>
            <div className={styles.content}>
                <Content content="Handout"/>
                <Content content="SLM"/>
                <Content content="Quiz"/>
            </div>

      </div>
    </div>
  )
}
