import React from 'react'
import styles from '../styles/Home.css'
import ProjectList from '../components/ProjectList'

const Home = (props) => {
  return (
    <div className={styles.home}>
      <p className={styles.label}>Geoff Johnson</p>
      <div className={styles.boxBar}>
        <div className={styles.box1} />
        <div className={styles.box2} />
        <div className={styles.box3} />
        <div className={styles.box4} />
        <div className={styles.box5} />
      </div>
      <div className={styles.left} />
      <ProjectList />
    </div>
  )
}

export default Home
