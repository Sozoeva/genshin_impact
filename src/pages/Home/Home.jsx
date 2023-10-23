import React from 'react'
import video from "../../assets/video/video.mp4"
import styles from "./Home.module.scss"

export const Home = () => {
  return (
    <div className={styles.home}>
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    <div className={`${"container"} ${styles.homeContent}`}>
      
    </div>
  </div>
  )
}