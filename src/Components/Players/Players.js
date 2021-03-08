import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faFutbol } from '@fortawesome/free-solid-svg-icons';
import './Players.css';

const Players = (props) => {
    const {name , teamName, image ,salary , jerseyNo , noOfGoals , nationality} = props.players;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="players-info">
             <img src={image} alt=""/>
             <h1>{name}</h1>
             <h2>{teamName}</h2>
             <h2>Jersey No : {jerseyNo}</h2>
             <h2> Number of Goals : {noOfGoals}</h2>
             <h2>Nationality : {nationality}</h2>
             <h4>Salary(Monthly) :€{salary}M</h4>
             <button className="btn" onClick={() => handleAddPlayer(props.players)} > <FontAwesomeIcon icon={faFutbol} /> Add To My Team</button>
        </div>
    );
};

export default Players;