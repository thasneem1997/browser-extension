import React from 'react'
import './Home.css'
import { useBrowser } from "../context/Browsercontext"

function Home() {
   const {name,browserdispatch}=useBrowser();
   const handlesubmit=(event)=>{
    event.preventDefault();
   }
   const handlechange=(event)=>{
    if (event.key === 'Enter' && event.target.value.trim() !== '') 
      {
    browserdispatch({type:"NAME",
    payload:event.target.value})
    localStorage.setItem("name",event.target.value);
    }
    
   }
  return (
    
    <div className='home-container'>
        <h1>Browser extension</h1>
        <h2>Hello, What's  your Name ?</h2>
        <form onSubmit={handlesubmit}>
        <input className='inputbox'  onKeyDown={handlechange}/>
        </form>
       
    </div>
  )
}

export default Home
