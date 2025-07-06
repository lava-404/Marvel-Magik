import React, { useEffect, useState } from 'react';

const JarvisVoice = ({ message }) => {
  const [jarvisVoice, setJarvisVoice] = useState(null);

  useEffect(() => {
    // Wait for voices to be loaded
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      // Try to get a British male voice or anything deep and sexy
      const voice =
        voices.find(v => v.name.includes('Daniel'))
      setJarvisVoice(voice);
    };

    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }

    loadVoices();
  }, []);

  useEffect(() => {
    if (jarvisVoice && message) {
      const utterance = new SpeechSynthesisUtterance(message);
      utterance.voice = jarvisVoice;
      utterance.rate = 0.92; // slow + classy
      utterance.pitch = 1;
      utterance.volume = 1;
      window.speechSynthesis.speak(utterance);
    }
  }, [jarvisVoice, message]);

  return null; // This component is pure voice, no visuals
};

export default JarvisVoice;
