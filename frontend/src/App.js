import React from "react";
import './App.css';
import gsap from "gsap";

import Game from "./components/Game";
import Highscores from "./components/Highscore";
import Guide from "./components/Guide";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      highscores: [],
      showTab: false,
      cover: true
    };

    this.newScore = this.newScore.bind(this);
    this.ascendSort = this.ascendSort.bind(this);
    this.toggleTab = this.toggleTab.bind(this);

    this.handleKeyPress = this.handleKeyPress.bind(this);
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

  handleKeyPress(e) {
    if (e.keyCode === 72) {
      this.toggleTab();
    }
  }

  componentDidMount() {
    const tl = gsap.timeline();
    tl.fromTo('#coverScreen',
      { display: 'flex', opacity: 1 },
      { display: 'flex', opacity: 0, delay: 2, duration: 1, onComplete: () => this.setState({ cover: false }) });
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (<main>
      <div id="coverScreen" style={this.state.cover ? { display: 'flex' } : { display: 'none' }}>Mix-Up<br/>Minesweeper</div>
      <Game newScore={this.newScore} />
      <Highscores highscores={this.state.highscores} showTab={this.state.showTab} toggleTab={this.toggleTab} />
      <Guide />
    </main>);
  }
};

export default App;