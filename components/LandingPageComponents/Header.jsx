import styles from '../../css-modules/LandingPageStyles/Header.module.css'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signup')
  }
  return(
    <div className={styles.main}>
      <div className={styles.brand}>Marvel Magik</div>
      <div className={styles.flex}>
        <div className={styles.tag} onClick={handleClick}>Login</div>
        <div className={styles.tag} onClick={handleClick}>Signup</div>
      </div>
    </div>
  )
}

export default Header