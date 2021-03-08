import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Data from './Data/Data.json';
import './Components/Players/Players'
import Players from './Components/Players/Players';
import { useEffect, useState } from 'react';
import Cart from './Components/Cart/Cart';



function App() {
  const [Player , setPlayer] =useState([]);
  const [team , setTeam] = useState([]);
  useEffect(() => {
        setPlayer(Data);
  } , [])
  
  
  const handleAddPlayer = (players) =>{
    if(!team.includes(players)){
      setTeam([...team , players]);
    }
    else{
      alert("Already Added In Your List.")
    }
  }

console.log(team);

  return (
    
<div className="backround">
<div className="container">
      <div className="row">
        <div className="col">
           <h1 className="text-center text-white">My FootBall Team</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
            <div className="player-info">
              {Player.map(players => <Players players = {players} handleAddPlayer={handleAddPlayer}></Players>)}
            </div>
        </div>
        <div className="col-md-6">
          <div className="my-team-status mb-5">
                 <Cart cart ={team} className="mb-5"></Cart>
          </div>
        </div>
      </div> 
    </div>
</div>
  );
}

export default App;
