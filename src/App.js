import React, { useState, useEffect } from 'react';
import './asset/App.css'
import fire from './FirebaseConfig';
import Login from './Components/Login'
import Hero from './Components/Hero'

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);



  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }
  const clearError = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handlerLogin = () => {
    clearError();
    fire.auth().signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case 'auth/invalid - email':
          case 'auth/user - disable':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;

        }
      });
  };
  const handleSignUp = () => {
    clearError();
    fire.auth().createUserWithEmailAndPassword(email, password)
      .catch (err => {
        switch (err.code) {
          case 'auth/email-alread-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;

        }
      });
  };
  const handleLogOut = () => {
    fire.auth().signOut();

  };
  const authListener = () => {

    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs()
        setUser(user);
      } else {
        setUser('');
      }
    })
  };
  useEffect(() => {
    authListener();
  }, []);


  return (
    <div class ='App'>
      {user ? (
        <Hero handleLogOut ={handleLogOut} />
      ) : (
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handlerLogin={handlerLogin}
            handleSignUp={handleSignUp}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
        )}



</div>
  )
};
export default App;