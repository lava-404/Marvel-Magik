import GetStarted from "../components/GetStartedPageComponents/GetStarted"
import Header from "../components/LandingPageComponents/Header.jsx"
import styles from '../css-modules/GetStartedPageStyles/PersonalityDetector.module.css'
const PersonalityDetector =  () =>{
  return(
    <div className={styles.main}>
       <Header></Header>
      <GetStarted />
    </div>
  )
 
}

export default PersonalityDetector