import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import axios from 'axios';
import NavBar from './NavBar';
import flower from "./assets/flower.jpg"

function Details() {
  const [result, setResult] = useState([])
  const [className, setClassName] = useState('right-bar');
  const navigation =useNavigate();
  useEffect(()=>{
    axios.get(`https://child.onrender.com/api/sciencefiction`).then((res)=>{
      console.log(res.data)
      setResult(res.data)
    }).catch((err)=>{
        console.log(err)
    })
  },[])
 const handleNext=()=>{
//   console.log("object")
 }
 const handlePrve=()=>{
    navigation("/")
 }
 const handleCard=()=>{
    setClassName('');
   setResult(result.slice(0,1))
 }
  return (
    <div>
    
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
        <h2 className='heading'>The Lost City of Future Earth</h2>
        <div className="center-items">
    <div className="header-item "><button className='btn1'>Word Explorer</button></div>
    <div className="header-item "><button className='btn2'>Story Adventure</button></div>
    <div className="header-item "><button className='btn3'>Brain Quest</button></div>
  </div>
        </div> 
      </div>
      <div className='content-box'>
      <h3>Drop Picture to the matching Words, light up correct pairs,shake for retry </h3>
      </div>
      <div className='allCard'>
       
<div className='left-bar'>
<div className="card-left">
    <h2>Correction(Noun)</h2>
    <p>The story is about a city where we assume that a city known at Lorem ipsum dolor</p>
 <img src={flower} className="logo" alt="Vite logo" width={100} height={100}/>
    <div className="container">
       <div className='footer-content'>
        <p>
        <span className='synonys'>synonyms:</span> lorem ipsum dolor.
        </p>
     
       </div>
       <div>
       <p>
       <span className='antonyms'>antonyms:</span> lorem ipsum dolor.
        </p>
       </div>
    </div>
  </div>
</div>


<div className={className}>
{
    result&&result?.slice(0,10).map((ele)=>
    <div className="card" onClick={handleCard}>
 <img src={flower} className="logo" alt="Vite logo" width={100} height={100}/>
    <div className="container">
     <p>Lorem ipsum dolor sit amet consectetur </p> 
    </div>
  </div>

  )
   }

</div>
      </div>
    <div className='preNextbtn'>
    <button onClick={handlePrve} >Prev</button>
    <button onClick={handleNext}>Next</button>
    </div>
    </div>
  )
}

export default Details
