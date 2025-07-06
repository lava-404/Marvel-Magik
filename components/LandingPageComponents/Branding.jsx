import styles from '../../css-modules/LandingPageStyles/Branding.module.css';

import GetStarted from "./GetStarted";

const Branding = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.brand}>
          Marvel Magik
        </div>
        <span className={styles.hero}>Part genius. Part god. Full chaos.</span>

          <div className={styles.tagline}>
            You're not just a fan...<br />
            You're a chaotic blend of gods, geniuses, and questionable moral decisions. <br />
            Decode your Marvel DNA and discover who's in charge up there 🧠✨
          </div>
 
          <GetStarted />
        </div>
    </>
  );
};

export default Branding;
