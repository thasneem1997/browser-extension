import './App.css';
import './pages/task.css'
import { Images } from './db/Images';

import Task from './pages/Task';
import Home from './pages/Home';
import { useBrowser } from './context/Browsercontext';
import { useEffect } from 'react';

const index = Math.floor(Math.random()*Images.length)
const bgimage = Images[index].image;
function App() {
  const {name,browserdispatch}=useBrowser();
 
useEffect(()=>{
    const userName=localStorage.getItem("name");

    browserdispatch({type:"NAME",payload:userName});
  },[])
  
  return (
    <div className="app" 
    style={{
      backgroundImage: `radial-gradient(rgba(0, 0, 0,0.2), rgba(0, 0, 0,0.10)), url(${bgimage})`
    }}>
{  name?<Task/>:<Home/>}
    

    </div>
  );
}

export default App;
