import { useEffect, useState } from 'react';
import styles from '../../css-modules/LandingPageStyles/FunFacts.module.css';

const FunFacts = () => {
  const facts = [
    {
      title: "Classified But Not Really",
      info: "Have you ever wondered why Nick Fury always wears black, keeps one eye covered, and smiles like he knows how the universe ends? Maybe it’s not fashion... maybe it’s insurance against knowing too much."
    },
    {
      title: "Marvel’s Dirty Little Secrets",
      info: "Do you really think Hulk left Earth after Age of Ultron just to ‘find himself’? Or was he just avoiding a deep emotional conversation with a redhead he ghosted after one lullaby?"
    },
    {
      title: "Alternate Timeline Files",
      info: "Ever thought about how close Loki was to becoming the good guy before he saw his own death? Marvel didn’t prune the variant. They pruned our closure."
    },
    {
      title: "Multiverse Gossip Protocol",
      info: "Why does Doctor Strange never blink when explaining multiverse rules? Maybe because even he doesn’t believe them anymore."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % facts.length);
    }, 7000); // rotate every 5 seconds

    return () => clearInterval(timer); // cleanup
  }, []);

  const { title, info } = facts[currentIndex];

  return (
    <div className={`${styles.main} ${styles.fade}`}>
      <div className={styles.header}>Conspiracy Time</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.info}>{info}</div>
    </div>
  );
};

export default FunFacts;
