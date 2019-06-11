import React from "react";
import "./style.css";



function ChampionCard(props) {
  return (
    <div className="card" onClick={() => props.handleClick(props.id)} >
      <div className="img-container">
        <img className="imgStyling" alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default ChampionCard;
