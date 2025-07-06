import { useNavigate } from 'react-router-dom';
import styles from '../../css-modules/SignupPageStyles/SignupForm.module.css';
import { signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { auth, provider } from '../../services/firebase';

const SignupForm = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/personalityDetector');
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const payload = {
        email: user.email,
        name: user.displayName
      };


      const response = await fetch('http://localhost:5667/signup/google-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Server error:", errorText);
        alert("Signup failed: " + errorText);
        return;
      }

      const data = await response.json();
      console.log(data);
      localStorage.setItem("user", JSON.stringify(payload))
      navigate('/personalityDetector');

    } catch (err) {
      console.error("Google login failed:", err);
      alert("Google login failed.");
    }
  };

  return (
    <div className={styles.mainn}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <img className={styles.imgs1} src="../../assets/avengers.jpg" alt="Avengers Poster" />
        <div className={styles.textholder}>
          <input
            type="email"
            placeholder="Please enter your email"
            className={styles.email}
          />
          <input
            type="password"
            placeholder="Please enter your password"
            className={styles.password}
          />
          <button type="button" className={styles.submit} onClick={handleSubmit}>
            Signup
          </button>
          <button type="button" className={styles.submit} onClick={handleGoogleLogin}>
            Sign In with Google
          </button>
        </div>
        <p className={styles.redirect}>
          Already have an account? Click here to{' '}
          <a href="/login" className={styles.link}>
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
