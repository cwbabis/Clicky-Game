import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
      <div className="jumbotron">
        <img className="img" alt={props.name} src="https://www.riotgames.com/darkroom/800/6e3cb0c1ef68c36917c0ebc60e134f69:27e118b555199ad4738eaa74561e3e79/blank-uml-page-2.png"></img>
      </div>
  );
}

export default Jumbotron;
