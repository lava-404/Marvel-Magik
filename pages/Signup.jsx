import SignupForm from "../components/SignupPageComponents/SignupForm"
import styles from '../css-modules/SignupPageStyles/Signup.module.css'
const Signup = () =>  {
  return(
    <div className={styles.main}>
      <SignupForm />
    </div>
  )
}

export default Signup