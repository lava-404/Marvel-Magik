import styles from '../css-modules/ResultsPageStyles/Result.module.css'
import { useLocation } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import { marked } from 'marked'
import Header from '../components/LandingPageComponents/Header';

const Result = () => {
 const storedUser = JSON.parse(localStorage.getItem("user"));
 const location = useLocation();
 const mainChar = location.state?.mainChar;
 const characterPercentages = location.state?.characterPercentages;
 const topThree = Object.entries(characterPercentages).sort(([,a],[,b]) => b - a).slice(0,3);
 const first = topThree[0]
 const second = topThree[1];
 const third = topThree[2];
 const [summary, setSummary ] = useState('')


 function splitCamelCase(str) {
   return str.replace(/([a-z])([A-Z])/g, '$1 $2');
 }

 useEffect(()=>{
   const LoadSummary = async () => {
     const response = await fetch('http://localhost:5667/summary',{
       method: "POST",
       headers: {"Content-Type" : "application/json"},
       body: JSON.stringify({
         mainChar: mainChar,
         first: {
           char: first[0],
           percentage: first[1]
         },
         second: {
           char: second[0],
           percentage: second[1]
         },
         third: {
           char: third[0],
           percentage: third[1]
         }
       })
     })
     const data = await response.json();
     console.log(data)
     setSummary(marked(data.reply))
   }
   LoadSummary()
 },[])

  return(
   <div className={styles.page}>
    <Header />
    <div className={styles.flex1}>
       <div className={styles.intro}>Variant Detected: Psych Profile Matches Subject </div>
       <div className={styles.char}>{splitCamelCase(mainChar)}</div>
       <div className={styles.dotted}></div>
       <div className={styles.charImg}><img className={styles.charImage}src="../assets/deadpool2.png"></img></div>
       <div className={styles.profile}>
         <div className={styles.sec1}>
           <div className={styles.cardImgDiv}><img src={`../assets/characters/${mainChar}.png`} alt={mainChar} className={styles.cardImg}></img></div>
           <div className={styles.badge}><img className={styles.shield} src="../assets/shield.jpg"></img></div>
         </div>

         <div className={styles.sec2}>
           <div className={styles.cardInfo}>
             <div className={styles.head}>S.H.I.E.L.D</div>
             <div className={styles.id}>PRIORITY IDENTIFICATION</div>
             <div className={styles.mainCard}>
               <div className={styles.hero}>Wicked Sorcerer</div>
               <div className={styles.heroLabel}>Meta Identity</div>
               <div className={styles.powers}>{splitCamelCase(mainChar)}</div>
               <div className={styles.identity}>Variant Prime</div>
               <div className={styles.realName}>{storedUser.name}</div>
               <div className={styles.name}>AUTHORIZED CARDHOLDER</div>
               <div className={styles.sign}>{storedUser.name.toLowerCase()}</div>
               <div className={styles.signature}>SIGNATURE</div>
             </div>
           </div>
           <div className={styles.stats}>
             <div className={styles.statsMain}>
               <div className={styles.statsHead}>STATISTICS</div>
               <div className={styles.statsNum}>
                 {first[0]}: {first[1]}% <br />
                 {second[0]}: {second[1]}% <br />
                 {third[0]}: {third[1]}%
               </div>
             </div>
             <div className={styles.statsMain2}>
               <div className={styles.fingerLabel}>FINGERPRINT</div>
               <div className={styles.fingerDiv}><img className={styles.finger} src="../assets/finger.jpg"></img></div>
             </div>
           </div>
         </div>
       </div>
   </div>
  <div className={styles.summaryDiv}>
      <div className={styles.summary} dangerouslySetInnerHTML={{ __html: summary }}>

    </div>
  </div>
   </div>
 )
}

export default Result
