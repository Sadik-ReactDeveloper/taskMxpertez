
import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
import flower from "./assets/flower.jpg"
import './App.css'
import axios from 'axios';
export default function NavBar() {
  return (
    <div className='NavBar'>
      <header>
  <div className="left-items">
    <div className="header-item">BrainlyLink</div>
  </div>
  <div className="center-items">
    <div className="header-item">Home</div>
    <div className="header-item">LeaderBoard</div>
    <div className="header-item">Daily Quit</div>
    <div className="header-item">Genre</div>
  </div>
  <div className="right-items">
    <div className="header-item signOut"><button>
    Sing Out</button></div>
  </div>
</header>
       <div>
        <h2 className='heading'>Science Fiction Stories</h2>
        <div>
        <div className="center-items">
    <div className="header-item "><button className='btn1'>New</button></div>
    <div className="header-item "><button className='btn2'>In Process</button></div>
    <div className="header-item "><button className='btn3'>Completed</button></div>
    <div className="header-item "><button className='btn4'>Clear All</button></div>
  </div>
       
        </div>
        </div> 
      </div>
  )
}
