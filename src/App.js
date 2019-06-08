import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import champions from "./champions.json";

class App extends Component {
  // Setting this.state.champions to the champions json array
  state = {
    champions
  };

  // Map over this.state.champions and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>League of Legends Memory Game</Title>
        {this.state.champions.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
