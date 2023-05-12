import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIeNAkWk16uRgg4GbQ_YKv7Z5Tnlq4A-Y",
  authDomain: "recipe-app-3ac7e.firebaseapp.com",
  projectId: "recipe-app-3ac7e",
  storageBucket: "recipe-app-3ac7e.appspot.com",
  messagingSenderId: "700776832243",
  appId: "1:700776832243:web:41d1cda7c64af8ea902b86",
  measurementId: "G-3BSPTYPMYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

