import React from "react";

import Position from "./Position";

const Field = props => {
  const { board, height, width } = props.state;
  const field = board ? board.map((obj, i) => {
    return <div className="fieldRow" style={{gridTemplateColumns: `repeat(${width}, 25px)`}} key={i}>{obj.map((point, j) => {
      return <Position i={i} j={j} position={props.position} info={board[i][j]} choose={props.choose} updateArea={props.updateArea} flag={props.flag} tool={props.tool} key={j} />
    })}</div>
  }) : null;
  return (<section id="playField" style={{gridTemplateRows: `repeat(${height}, 25px)`}}>
    {field}
    <div className="cover" style={props.playing ? {zIndex: -1} : {zIndex: 3}}/>
  </section>);
}

export default Field;