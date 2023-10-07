import React from 'react';
import styles from './CoursePage.module.css';
import Content from '../Content/Content';
export default function CoursePage({courseName}) {
  return (
    <div className={styles.container}>
      <div>
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
