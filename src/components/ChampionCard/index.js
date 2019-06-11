import React from "react";
import "./style.css";

const imgStyling = {
  height: "80px",
  width: "80px"
};

function ChampionCard(props) {
  return (
    <div className="card" onClick={() => props.handleClick(props.id)} >
      <div className="img-container">
        <img style={imgStyling} alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default ChampionCard;
