import Branding from "../components/LandingPageComponents/Branding"

import Header from "../components/LandingPageComponents/Header"
import styles from '../css-modules/LandingPageStyles/LandingPage.module.css'


import spiderman from '/assets/spiderman.jpg'
import groot from '/assets/groot.jpg'
import loki from '/assets/loki.jpg'
import thanos from '/assets/thanos.jpg'
import { useEffect } from "react"

import { useState } from "react"
import FunFacts from "../components/LandingPageComponents/FunFacts"

const LandingPage = () => {
  const array = [spiderman, groot, thanos]
  const [bgIndex, setBgIndex] = useState(0)

    useEffect(()=>{
      const interval = setInterval(()=>{
        setBgIndex(prev => (prev+1) % array.length)
      }, 4000)
    }, [array.length])
  
  return(
    <div className={styles.superMain}>
      <div className={styles.mainnn}>
        <Header></Header>
        <Branding></Branding>
      </div>
      <div className={styles.main2}
        style={{
          backgroundImage: `url(${array[bgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'background-image 1s ease-in-out',
        }}
      >
        <FunFacts></FunFacts>
      </div>
    </div>
    
  )
}

export default LandingPage