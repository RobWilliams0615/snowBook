import React from 'react';

import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '../firebase-config';

const Home = (props) => {
  const showProfiles = (id) => {
    props.history.push(`/profiledetail/${id}`);
  };
  const [loggedIn, setLoggedIn] = useState(false);
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [loginEmail, setLogEmail] = useState('');
  const [loginPassword, setLogPassword] = useState('');
  const [user, setUser] = useState({});
  const toggleLogIn = () => {
    setLoggedIn(!loggedIn);
  };
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        regEmail,
        regPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

      toggleLogIn();

      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      {loggedIn === false ? (
        <div className="auth-form">
          <div>
            <h3>Register</h3>
            <input
              onChange={(event) => {
                setRegEmail(event.target.value);
              }}
              placeholder={'email address'}
            ></input>
            <input
              onChange={(event) => {
                setRegPassword(event.target.value);
              }}
              placeholder={'Password'}
            ></input>

            <button onClick={register}>Add Account</button>
          </div>
          <div>
            <h3>Login Here</h3>
            <input
              placeholder="email address"
              onChange={(event) => {
                setLogEmail(event.target.value);
              }}
            />
            <input
              placeholder="Password"
              onChange={(event) => {
                setLogPassword(event.target.value);
              }}
            />

            <button onClick={login}>Login </button>
          </div>

          <h3>Logged in</h3>
          <h3>{user?.email}</h3>
          <button className="register-btn" onClick={logout}>
            Log out
          </button>
        </div>
      ) : (
        <div className="grid-container">
          {props.home.map((ele, idx) => (
            <div
              key={idx}
              className="profile-card"
              onClick={() => showProfiles(ele.id)}
            >
              <div className="profile-names" key={idx}>
                <img src={ele.image} />
                <div>{ele.firstName}</div>
                <div>{ele.lastName}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Home;
