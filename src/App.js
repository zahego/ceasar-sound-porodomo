import './styles/App.css';
import {NavBar} from './components/navBar.js';
import {Ceasar} from './components/ceasar.js';
import {Pomodoro} from './components/pomodoro.js';
import {Sound} from './components/sound.js';
import React, { useState } from "react";

function App() {
  const [currentItem, setCurrentItem] = useState(0)
  return (
    <div className="App">
        <NavBar currentItem={currentItem} setCurrentItem={setCurrentItem}/>
        {currentItem===0?<Ceasar/>:null}
        {currentItem===1?<Pomodoro/>:null}
        {currentItem===2?<Sound/>:null}
    </div>
  );
}

export default App;
