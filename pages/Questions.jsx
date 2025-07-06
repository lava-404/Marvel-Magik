import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../css-modules/QuestionsPageStyles/Questions.module.css';

const Questions = () => {
  const [response, setResponse] = useState(null);
  const [selection, setSelection] = useState(null);
  const [ questionNo, setQuestionNo ] = useState(0);
  const navigate = useNavigate();

  const [score, setScore] = useState({
    Leader: 0,
    Chaotic: 0,
    Loner: 0,
    Sassy: 0,
    Loyal: 0,
    Strategist: 0,
    Rebellious: 0,
    Empath: 0,
    Aggressive: 0,
    Optimist: 0,
    Vengeful: 0,
    Goofy: 0,
    Caretaker: 0,
    Mystic: 0
  });

  // 1️⃣ Fetch questions from backend
  const generateQuestions = async () => {
    const data = await fetch('http://localhost:5667/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await data.json();
    const raw = json.reply;
    const clean = raw.replace(/```json|```/g, '').trim();
    const response = JSON.parse(clean);
    setResponse(response);
    console.log(response.question);
  };

  // 2️⃣ Update score based on selected traits
  const calcPoints = (traits) => {
    const updatedScore = { ...score };
    for (const trait in traits) {
      if (updatedScore.hasOwnProperty(trait)) {
        updatedScore[trait] += traits[trait];
        
      }
    }
    setScore(updatedScore)
  };

  useEffect(() => {
    console.log("Updated Score:", score);
  }, [score]);

  // 3️⃣ Handle radio change
  const handleChange = (e, option) => {
    setSelection(option);
  };

  // 4️⃣ Handle next button
  const handleNext = async (option) => {
    if (!option) return console.warn("No option selected!");

    calcPoints(option.traits);
  
    setQuestionNo((prev) => {
      const next = prev + 1;
      if (next > 10) {
        calculateTotalPoints();
        console.log("Congrats");
        return prev; // keep it at 10
      }
      return next;
    });
  
    await generateQuestions();
    setSelection(null);;
  };

  // 5️⃣ Initial question load
  useEffect(() => {
    generateQuestions();
    setQuestionNo(1)
  }, []);

  //6️⃣ Calculate Total Points

  const calculateTotalPoints = () => {
    const characterPoints = {
      CaptainAmerica: score.Leader, 
      Loki: score.Chaotic, 
      WinterSoldier: score.Loner, 
      IronMan: score.Sassy,
      SpiderMan: score.Loyal,
      DoctorStrange: score.Strategist, 
      Deadpool: score.Rebellious, 
      WandaMaximoff: score.Empath, 
      Wolverine: score.Aggressive, 
      AntMan: score.Optimist, 
      Killmonger: score.Vengeful, 
      StarLord: score.Goofy, 
      AuntMay: score.Caretaker, 
      MoonKnight: score.Mystic
    };

    const totalPoints = Object.values(characterPoints).reduce((acc, val) => acc + val, 0); 

    const characterPercentages = {};
    for (const char in characterPoints) {
      characterPercentages[char] = Math.round((characterPoints[char] / totalPoints) * 100);
    }
    console.log(characterPercentages);
    const mainChar = Object.keys(characterPercentages).reduce((a,b)=> characterPercentages[a] > characterPercentages[b] ? a : b)
    console.log(mainChar)
    navigate('/results', {state: {mainChar, characterPercentages}});
  }

  // 🖼️ UI rendering
  return (
    <div className={styles.main}>
      <div className={styles.icon}>
        <img className={styles.spidey} src="/assets/spidey.png" />
      </div>

      {response && response.options ? (
        <div className={styles.card}>
          <div className={styles.question}>{response.question}</div>
          <div className={styles.options}>
            {response.options.map((option, index) => (
              <>
                <label className={styles.option}>
                  <input
                    type="radio"
                    name="personalityOption"
                    value={option.label}
                    onChange={(e) => handleChange(e, option)}
                    className={styles.label}
                  />
                  {option.label}
                </label>
                <br />
              </>
            ))}
          </div>
          <button onClick={() => handleNext(selection)} className={styles.next}>Next</button>
        </div>
      ) : (
        <div>Summoning Nexus Oracle..</div>
      )}
    </div>
  );
};

export default Questions;
