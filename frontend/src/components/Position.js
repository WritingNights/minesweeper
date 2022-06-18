import React from "react";

const bomb = (<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 64 64" version="1.1">
  <g>
    <path fill="#d2f0ea" d="M38.5,8.08c-4.79,0-8.68,3.89-8.68,8.68v1.21h2v-1.21c0-3.68,3-6.68,6.68-6.68s6.68,3,6.68,6.68h2   C47.18,11.97,43.28,8.08,38.5,8.08z"/>
    <ellipse fill="#b4e6dd" cx="46.18" cy="16.77" rx="1" ry="0.44"/>
    <path fill="#f33" d="M34.94,19.69v-3.95H26.7v3.95c-8.15,1.87-14.24,9.16-14.24,17.88c0,10.14,8.22,18.36,18.36,18.36   s18.36-8.22,18.36-18.36C49.18,28.85,43.09,21.56,34.94,19.69z"/>
    <g>
      <g>
        <g>
          <rect fill="#fbd872" height="0.81" width="3.49" x="48.05" y="16.27"/>
        </g>
        <g>
          <rect fill="#fbd872" height="0.81" width="3.49" x="40.82" y="16.27"/>
        </g>
      </g>
      <g>
        <g>
          <rect fill="#fbd872" height="3.49" transform="matrix(0.7071 -0.7071 0.7071 0.7071 0.6773 40.0916)" width="0.81" x="48.33" y="17.48"/>
        </g>
      </g>
      <g>
        <g>
          <rect fill="#fbd872" height="3.49" width="0.81" x="45.77" y="18.54"/>
        </g>
      </g>
      <g>
        <g>
          <rect fill="#fbd872" height="0.81" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -0.82 36.4769)" width="3.49" x="41.88" y="18.82"/>
        </g>
      </g>
    </g>
  </g>
</svg>);

const flag = (<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="22px" height="22px" viewBox="0 0 60 60">
  <polygon fill="#CC4B4C" points="52,23.5 10,40 10,22 10,4 "/>
  <path fill="#424A60" d="M9,0C8.448,0,8,0.447,8,1v3v55c0,0.553,0.448,1,1,1s1-0.447,1-1V4V1C10,0.447,9.552,0,9,0z"/>
</svg>);

const active = { boxShadow: 'inset 0 0 5px black' };

const Position = props => {
  const { i, j, info, position } = props;
  return (<div name={`${i}, ${j}`} id={`x${i}y${j}`} style={position.x === j && position.y === i ? active : {}} className={(!info.visible || info.visible === 'flag') ? "fieldUnit" : "visible fieldUnit"} onClick={() => {if (!props.tool) {props.flag(i, j)} else if (!info.visible) props.updateArea(props.choose(i, j))}} onContextMenu={(e) => {e.preventDefault(); props.flag(i, j)}}>
    {info.visible ? info.visible === 'flag' ? flag : info.value === 'B' ? bomb : info.value : ''}
  </div>);
};

export default Position;