
import styles from '../../css-modules/GetStartedPageStyles/GetStarted.module.css'
import { useNavigate } from "react-router-dom";

const GetStarted = () => {

  const navigate = useNavigate();
  
  const handleClick =  () => {
    navigate('/questions')
  }

  return(
    <>
    <div className={styles.main}>
      <div className={styles.flex1}>
        <div className={styles.getStarted}><div className={styles.get}><span className={styles.sum}>Sum</span>mon</div> <div className={styles.started}>Magic</div></div>
        <div className={styles.tagline}>Behind every click lies a destiny. Step into the multiverse and uncover whether<br /> you're a savior, a menace, or something far more chaotic.</div>
        <button onClick={handleClick} className={styles.cta}>Get Started</button>
      </div>
      <div className={styles.flex2}>
      </div>
    </div>
    </>
  )
}

export default GetStarted