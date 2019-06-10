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
  backgroundRepeat: "no-repeat"
};


class App extends Component {
  // Setting this.state.champions to the champions json array
  state = {
    champions
  };

  // Map over this.state.champions and render a FriendCard component for each friend object
  render() {
    return (

      <section style={sectionStyle}>
        <Jumbotron />
        <Wrapper >
          {this.state.champions.map(champion => (
            <ChampionCard
              id={champion.id}
              key={champion.id}
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
