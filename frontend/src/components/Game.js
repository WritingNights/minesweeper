import React from "react";
import gsap from "gsap";

import Controls from "./Controls";
import Field from "./Field";
import NavBottom from "./NavBottom";

const winH = Math.floor(window.innerHeight / 25 - 6)
const winW = Math.floor(window.innerWidth / 25 - 4);

const height = winH > 14 ? 14 : winH;
const width =  winW > 18 ? 18 : winW;

const initialState = {
  height: height,
  width: width,
  area: height * width,
  mines: Math.round(height * width / 6.3),
  flags: 0,
  board: null,
  randMines: null,
  time: 0,
  tool: true,
  playing: true
}

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.updateBoard = this.updateBoard.bind(this);
    this.randomMines = this.randomMines.bind(this);
    this.checkList = this.checkList.bind(this);
    this.choose = this.choose.bind(this);
    this.surrounding = this.surrounding.bind(this);
    this.flag = this.flag.bind(this);
    this.updateArea = this.updateArea.bind(this);

    this.new = this.new.bind(this);
    this.updateTool = this.updateTool.bind(this);
  }

  updateBoard() {
    const { height, width } = this.state;
    const mines = this.randomMines();
    let tempBoard = (new Array(height)).fill().map(() => {return new Array(width).fill(0)})
    mines.forEach(mine => {
      const y = mine[0];
      const x = mine[1];
      tempBoard[x][y] = 'B';
      for (let k = x - 1; k < x + 2; k++) {
        for (let l = y - 1; l < y + 2; l++) {
          if (k >= 0 && l >= 0 && k < height && l < width && tempBoard[k][l] !== 'B') {
            tempBoard[k][l]++;
          }
        }
      }
    })
    let board = (new Array(height)).fill().map((arr, i) => {
      return new Array(width).fill().map((obj, j) => {
        return {value: tempBoard[i][j] !== 0 ? tempBoard[i][j] : '', visible: false}
      })
    });
    //console.table(tempBoard);
    this.setState({ board: board, area: height * width, flags: 0, randMines: mines, time: 0, playing: true });
    gsap.fromTo('#playField', { opacity: 0 }, { opacity: 1, duration: 1 });
  }

  randomMines() {
    const { mines, height, width } = this.state;
    let mineArr = []
    while (mineArr.length < mines) {
      const point = [Math.round(Math.random() * (width - 1)), Math.round(Math.random() * (height - 1))];
      if (!this.checkList(mineArr, point)) {
        mineArr.push(point);
      }
    }
    return mineArr;
  }

  checkList(arr, point) {
    for (let i = 0; i < arr.length; i++) {
      if (point[0] === arr[i][0] && point[1] === arr[i][1]) {
        return true;
      }
    }
    return false;
  }

  choose(x, y) {
    const { height, width, board, area, mines } = this.state;
    let subtract = 0;
    board[x][y] = {...board[x][y], visible: true};
    this.setState({ board: board, area: this.state.area - 1 });
    gsap.fromTo(`#x${x}y${y}`, {opacity: 0}, {opacity: 1, duration: .15, onComplete: () => {subtract += this.surrounding(x, y)}});
    if (board[x][y].value === 'B') {
      this.allMines();
      clearInterval(this.state.intervalId);
      this.setState({ playing: false });
      return;
    }
    if (area === height * width) {
      this.setState({ intervalId: setInterval(() => {
        this.incrementTime();
      }, 1000) });
    }
    if (area - 1 === mines) {
      let score = Math.round((height * width * mines) / (1 + this.state.time / 50));
      alert(`you won\nscore is ${score}`);
      this.props.newScore({score: score, height: height, width: width, mines: mines, time: this.state.time});
      clearInterval(this.state.intervalId);
      this.setState({ playing: false });
    }
    return subtract - 1;
  }

  surrounding(x, y) {
    const { height, width, board } = this.state;
    let subtract = 0;
    if (board[x][y].value === '') {
      for (let i = x - 1; i < x + 2; i++) {
        for (let j = y - 1; j < y + 2; j++) {
          if (i < height && i >= 0 && j < width && j >= 0 && !board[i][j].visible) {
            subtract += this.choose(i, j);
          }
        }
      }
    }
    return subtract;
  }

  allMines() {
    const { board, randMines } = this.state;
    if (randMines) {
      for (let i = 0; i < randMines.length; i++) {
        const y = randMines[i][0];
        const x = randMines[i][1];
        gsap.fromTo(`#x${x}y${y}`, {opacity: 0}, {opacity: 1, duration: .25, onComplete: () => {
          board[x][y] = {...board[x][y], visible: true};
          this.setState({ board: board });
        } });
      }
    }
  }

  flag(x, y) {
    const { board } = this.state;
    if (!board[x][y].visible) {
      board[x][y].visible = 'flag';
      this.setState({ flags: this.state.flags + 1 });
    } else if (board[x][y].visible === 'flag') {
      board[x][y].visible = false;
      this.setState({ flags: this.state.flags - 1 });
    }
    this.setState({ board: board });
  }

  updateArea(area) {
    this.setState({ area: this.state.area + area });
  }

  new(height, width, mines) {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
    }
    this.setState({ height: height, width: width, mines: mines });
    gsap.fromTo('#playField', { opacity: 0 }, { opacity: 0, duration: 2, onComplete: () => {
      this.updateBoard();
      this.setState({ tool: true });
    } });
  }

  updateTool(tool) {
    this.setState({ tool: tool === 'shovel' });
  }

  incrementTime() {
    const { time } = this.state;
    if (time + 1 > 999 && this.state.intervalId) {
      clearInterval(this.state.intervalId);
    } else {
      this.setState({ time: time + 1 })
    }
  }

  componentDidMount() {
    this.updateBoard();
  }

  render() {
    const { flags, time, height, width, mines, tool, playing } = this.state;
    /*const swap = (<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24px" height="24px" viewBox="0 0 369.949 369.949">
      <path d="M184.972,0.003C82.821,0.003,0,82.821,0,184.975s82.821,184.972,184.972,184.972c102.16,0,184.978-82.818,184.978-184.972 S287.132,0.003,184.972,0.003z M184.972,353.512c-92.927,0-168.536-75.606-168.536-168.537 c0-92.93,75.609-168.536,168.536-168.536c92.931,0,168.537,75.606,168.537,168.536 C353.509,277.905,277.908,353.512,184.972,353.512z"/>
      <path d="M239.573,51.936v139.669l10.575-10.572c5.212-5.215,13.643-5.215,18.849,0c5.206,5.209,5.206,13.646,0,18.846 l-33.32,33.32l-0.013,0.019l-9.421,9.415l-9.41-9.415l-0.023-0.019l-31.099-31.099c-5.209-5.212-5.209-13.646,0-18.849 c5.206-5.206,13.643-5.206,18.849,0l8.353,8.347V46.588c0-0.918,0.103-1.801,0.271-2.675c-9.128-1.822-18.555-2.81-28.211-2.81 c-79.326,0-143.866,64.54-143.866,143.866c0,57.016,33.438,106.255,81.656,129.518V178.475l-10.568,10.571 c-2.6,2.606-6.014,3.909-9.428,3.909c-3.411,0-6.818-1.303-9.424-3.909c-5.209-5.209-5.209-13.646,0-18.846l33.32-33.324 c0.006-0.006,0.006-0.006,0.006-0.006l9.427-9.424l9.419,9.412c0,0,0.006,0.012,0.018,0.018l31.102,31.102 c5.209,5.209,5.209,13.646,0,18.846c-5.209,5.212-13.646,5.212-18.852,0l-8.35-8.344v145.013c0,0.24-0.057,0.469-0.069,0.709 c11.412,2.924,23.305,4.636,35.614,4.636c79.33,0,143.881-64.54,143.881-143.863C328.847,124.975,291.894,73.49,239.573,51.936z"/>
    </svg>);*/
    return (<div className="boardContainer">
      <Controls height={height} width={width} mines={mines} new={this.new} />
      <Field state={this.state} updateArea={this.updateArea} choose={this.choose} flag={this.flag} tool={tool} playing={playing} />
      <NavBottom flags={mines - flags} time={time} mines={mines} tool={tool} updateTool={this.updateTool} width={width} />
    </div>)
  }
}

export default Game;