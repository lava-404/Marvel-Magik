import styles from '../../css-modules/LandingPageStyles/GetStarted.module.css'
import {useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const GetStarted = () => {
 
  const [ani, setAni] = useState(false)
   

  const navigate = useNavigate()
  const handleMusic = () => {
    const audio = new Audio("/assets/jarvis-intro1-101soundboards.mp3");
    audio.volume = 0.4;
    audio.play();
    console.log('play')
    setAni(true);
  }

  useEffect(()=>{
    if (ani){
      const interval = setTimeout(()=>{
        navigate('/signup')
       }, 8000)
       return () => clearTimeout(interval)
    }
   },[ani, navigate]) ;

  return(
    <div className={styles.main}>
      <button className={styles.button1} onClick={handleMusic}>Sign In To Initiate Personality Sequence</button>
  
      { ani && (
        
         <div className={styles.glowText}>
         <TypeAnimation
           sequence={[
             "Running J.A.R.V.I.S. personality algorithm. Proceeding to analyze cognitive patterns, hero potential, and subtle character flaws",
             500,
           ]}
           speed={50}
           style={{ 
             fontSize: '20px', 
             display: 'block', 
             color: 'white', 
             textAlign: 'center' 
           }}
           repeat={Infinity}
         />
         </div>
      )}
    </div>
  )
}

export default GetStarted