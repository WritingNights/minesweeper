import React from "react";

const Position = props => {
  const { i, j, info } = props;
  return (<div name={`${i}, ${j}`} className={info.visible ? "visible fieldUnit" : "fieldUnit"} onClick={() => props.choose(i, j)}>{info.visible ? info.value : ''}</div>);
};

export default Position;