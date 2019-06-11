import React, { Component } from "react";
import ChampionCard from "./components/ChampionCard";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import champions from "./champions.json";
import Background from '../src/img/bg-default.jpg';
/* import FontAwesome from ('react-fontawesome'); */
import StickyFooter from 'react-sticky-footer';


const sectionStyle = {
  background: "black",
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center;",
  position: "absolute",
  width: "100%",
  height: "100%",
  overflow: "scroll",
};


class App extends Component {
  // Setting this.state.champions to the champions json array
  state = {
    champions,
    currentScore: 0,
    topScore: 0,
    rightWrong: "Memory Game: Click an image to begin!",
    clicked: [],
    deaths: 0
  };

  handleClick = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const rescuebots = this.state.rescuebots.filter(rescuebot => rescuebot.id !== id);
    // Set this.state.friends equal to the new friends array
    // this.setState({ rescuebots });
    if (this.state.clicked.indexOf(id) < 0) {
      console.log("No match, keep going");
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });

    }
    else {
      console.log("Defeat!");
      this.handleReset();
    }
  };
  handleIncrement = () => {
    console.log("Add 1 point to score!");
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: "You guessed correctly!"
    });
    if (newScore === 144) {
      this.setState({
        rightWrong: "Victory!",
        topScore: newScore
      });
    }
    else if (newScore > this.state.topScore) {
      this.setState({
        topScore: newScore
      });
    }
  }
  handleReset = () => {
    console.log("Resetting score!");
    const currentDeaths = this.state.deaths + 1;
    this.setState({
      currentScore: 0,
      deaths: currentDeaths,
      topScore: this.state.topScore,
      rightWrong: "Defeat!",
      clicked: []
    });
  }

  // Map over this.state.champions and render a ChampionCard component for each champion object
  render() {
    champions.sort(function (a, b) { return 0.5 - Math.random() });
    return (

      <section style={sectionStyle}>
        <Jumbotron
          rightWrong={this.state.rightWrong}
          score={this.state.currentScore}
          topScore={this.state.topScore}
          currentDeaths={this.state.deaths}
        />
        <Wrapper >
          {this.state.champions.map(champion => (
            <ChampionCard
              handleClick={this.handleClick}
              id={champion.id}
              key={champion.id}
              name={champion.name}
              image={champion.image}
            />
          ))}
        </Wrapper>
        <StickyFooter
          bottomThreshold={50}
          normalStyles={{

            backgroundColor: "#0A0A0C",
            outline: "2px solid #937341",
            padding: "2rem"
          }}
          stickyStyles={{
            backgroundColor: "rgba(255,255,255,.8)",
            outline: "2px solid ##937341",
            padding: "2rem",
          }}
        />
      </section>

    );
  }
}
export default App;
