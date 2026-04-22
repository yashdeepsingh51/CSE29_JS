import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from "./component/Student.jsx";

function App() {
  

  return (
    <>
    <div className="container">
      <h1>Student Information</h1>

      <Student name="Yashdeep Singh" course="B.Tech" marks="95" />
      <Student name="Rohan Gupta" course="Computer Science" marks="90" />
      <Student name="Amandeep Singh" course="Information Technology" marks="88" />

    </div>

    </>
  );
}

export default App;
