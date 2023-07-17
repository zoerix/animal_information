import React, { useState, useEffect } from 'react';
import BearData from './components/BearData/BearData';
import BearImg from './components/BearImg/BearImg';
import SharkData from './components/SharkData/SharkData';
import SharkImg from './components/SharkImg/SharkImg';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { MonkeyData } from './components/MonkeyData/MonkeyData';
import MonkeyImg from './components/MonkeyImg/MonkeyImg';
import './App.scss';

function App() {

  return (
    <div className='App'>
      <Header />
      <div className='animalDataContainer'>
        <h2 className="headingShark">🦈️ SHARKS 🦈️</h2>
        <SharkData />
        <SharkImg />
        <h2 className="headingMonkey">🐵️ MONKEYS 🐵️</h2>
        <MonkeyData />
        <MonkeyImg />
        <h2 className="headingBear">🐻️ BEARS 🐻</h2>
        <BearData />
        <BearImg />
      </div>
      <Footer />
    </div>
  )
}

export default App
