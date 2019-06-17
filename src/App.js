import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import char from "./char.json";

class App extends Component {
  state = {
    char,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.char.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  };

  imgClick = id => {
    this.state.char.find((o, i) => {
      if (o.id === id) {
        if (char[i].count === 0) {
          char[i].count = char[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          this.state.char.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  };

  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} topScore={this.state.highscore} />
        {this.state.char.map(friend => (
          <FriendCard
            imgClick={this.imgClick}
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
