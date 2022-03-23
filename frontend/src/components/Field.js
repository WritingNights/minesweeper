import React from "react";

import Position from "./Position";

class Field extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 10,
      width: 10,
      bombs: 10,
      flags: 0,
      board: null
    }

    this.updateBoard = this.updateBoard.bind(this);
    this.randomBombs = this.randomBombs.bind(this);
    this.checkList = this.checkList.bind(this);
    this.choose = this.choose.bind(this);
  }

  updateBoard() {
    const { height, width } = this.state;
    const bombs = this.randomBombs();
    let tempBoard = (new Array(height)).fill().map(() => {return new Array(width).fill(0)})
    bombs.forEach(bomb => {
      const y = bomb[0];
      const x = bomb[1];
      tempBoard[x][y] = 'B';
      for (let k = x - 1; k < x + 2; k++) {
        for (let l = y - 1; l < y + 2; l++) {
          if (k >= 0 && l >= 0 && k < height && l < width) {
            if (tempBoard[k][l] !== 'B') {
              tempBoard[k][l]++;
            }
          }
        }
      }
    })
    let board = (new Array(height)).fill().map((arr, i) => {
      return new Array(width).fill().map((obj, j) => {
        return {value: tempBoard[i][j] !== 0 ? tempBoard[i][j] : '', visible: false}
      })
    });
    console.table(tempBoard);
    this.setState({ board: board });
  }

  randomBombs() {
    const { bombs, height, width } = this.state;
    let bombArr = []
    while (bombArr.length < bombs) {
      const point = [Math.round(Math.random() * (width - 1)), Math.round(Math.random() * (height - 1))];
      if (!this.checkList(bombArr, point)) {
        bombArr.push(point);
      }
    }
    return bombArr;
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
    const { height, width, board } = this.state;
    board[x][y] = {...board[x][y], visible: true};
    if (board[x][y].value === '') {
      console.log()
      if (x < width - 1 && !board[x + 1][y].visible) {
        this.choose(x + 1, y);
      }
      if (x > 0 && !board[x - 1][y].visible) {
        this.choose(x - 1, y);
      }
      if (y < height - 1 && !board[x][y + 1].visible) {
        this.choose(x, y + 1);
      }
      if (y > 0 && !board[x][y - 1].visible) {
        this.choose(x, y - 1);
      }
    }
    this.setState({ board: board });
  }

  componentDidMount() {
    this.updateBoard();
  }

  render() {
    const { board, height, width } = this.state;
    const field = board ? board.map((obj, i) => {
      return <div className="fieldRow" style={{gridTemplateColumns: `repeat(${width}, 25px)`}} key={i}>{obj.map((point, j) => {
        return <Position i={i} j={j} info={board[i][j]} choose={this.choose} key={j} />
      })}</div>
    }) : null;
    return (<section id="playField" style={{gridTemplateRows: `repeat(${height}, 25px)`}}>
      {field}
      <button onClick={this.updateBoard}>New</button>
    </section>);
  }
}

export default Field;