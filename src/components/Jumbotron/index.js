import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron">
      <img className="img" alt={props.name} src="https://www.riotgames.com/darkroom/800/6e3cb0c1ef68c36917c0ebc60e134f69:27e118b555199ad4738eaa74561e3e79/blank-uml-page-2.png"></img>

      <h2 id="right-wrong">{props.rightWrong}</h2>
      <h2 className="cs" id="current-score">Current K/DA: {props.score}/0/0</h2>
      <h2 className="ts" id="top-score">Best K/DA: {props.topScore}/0/0</h2>

    </div>
  );
}

export default Jumbotron;
