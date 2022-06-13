import React from "react";
import './App.css';

import Game from "./components/Game";
import Highscores from "./components/Highscore";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      highscores: [],
      showTab: false
    };

    this.newScore = this.newScore.bind(this);
    this.ascendSort = this.ascendSort.bind(this);
    this.toggleTab = this.toggleTab.bind(this);
  }

  newScore(score) {
    console.log(score);
    const { highscores } = this.state;
    let board = [...highscores]
    board.unshift(score);
    let temp = this.ascendSort(board);
    if (temp.length > 10) {
      temp.shift();
    }
    this.setState({highscores: temp});
  }

  ascendSort(arr) {
    let temp = [...arr];
    for (let i = 0; i < temp.length - 1; i++) {
      let min = temp[i];
      let ind = i;
      for (let j = i + 1; j < temp.length; j++) {
        if (arr[j].score < min.score) {
          min = temp[j];
          ind = j;
        }
      }
      temp[ind] = temp[i];
      temp[i] = min;
    }
    return temp;
  }

  toggleTab() {
    this.setState({ showTab: !this.state.showTab });
  }

  render() {
    return (<main>
      <Game newScore={this.newScore} />
      <Highscores highscores={this.state.highscores} showTab={this.state.showTab} toggleTab={this.toggleTab} />
    </main>);
  }
};

export default App;