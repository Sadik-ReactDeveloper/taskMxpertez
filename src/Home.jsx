import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
import flower from "./assets/flower.jpg"
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import axiosConfig from "./axiosConfig"
import NavBar from './NavBar'
// import CardData from './CardData';

function Home() {
    const navigation =useNavigate();
  const [result, setResult] = useState([])
  useEffect(()=>{
    axios.get(`https://child.onrender.com/api/sciencefiction`).then((res)=>{
      console.log(res.data)
      setResult(res.data)
    }).catch((err)=>{
        console.log(err)
    })
  },[])
 const handleNext=()=>{
    navigation("/details")
 }
  return (
    <div>
        <NavBar />
    <div className='mainCard'>
    
   {
    result&&result?.slice(0,11).map((ele)=>
    
    <div className="card">
      {console.log(ele.Image[0])}

     
 <img src={flower} className="logo" alt="Vite logo" width={100} height={100}/>
    <div className="container">
      <h4 className='cardTitle'>{ele.
Title
}
</h4> 
     <button className='cartBtn'>{ele?.Status}</button>
    </div>
  </div>
  )
   }
      
    </div>
    <div className='preNextbtn'>
    <button>Prev</button>
    <button onClick={handleNext}>Next</button>
    </div>
    </div>
  )
}

export default Home
