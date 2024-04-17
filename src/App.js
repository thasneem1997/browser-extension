import './App.css';
import { Images } from './db/Images';
import Home from './pages/Home';

function App() {
  const index = Math.floor(Math.random()*Images.length)
  const bgimage = Images[index].image;
  
  return (
    <div className="app" style={{
      backgroundImage: `radial-gradient(rgba(0, 0, 0,0.2), rgba(0, 0, 0,0.10)), url(${bgimage})`
    }}>
  {/* name?<task/>:<home/> */}
    <Home />

    </div>
  );
}

export default App;
