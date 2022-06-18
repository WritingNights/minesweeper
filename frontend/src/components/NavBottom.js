import React from "react";

const flag = (<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="26px" height="26px" viewBox="0 0 60 60">
  <polygon fill="#CC4B4C" points="52,23.5 10,40 10,22 10,4 "/>
  <path fill="#424A60" d="M9,0C8.448,0,8,0.447,8,1v3v55c0,0.553,0.448,1,1,1s1-0.447,1-1V4V1C10,0.447,9.552,0,9,0z"/>
</svg>);

const stopwatch = (<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="26px" height="26px" viewBox="0 0 512 512">
	<path d="M256,0c-11.782,0-21.333,9.551-21.333,21.333v64c0,11.782,9.551,21.333,21.333,21.333     c11.782,0,21.333-9.551,21.333-21.333V43.72c107.802,10.704,192,101.662,192,212.28c0,117.818-95.515,213.333-213.333,213.333     S42.667,373.818,42.667,256c0-55.218,21.036-107.082,58.178-146.421c8.089-8.567,7.701-22.069-0.866-30.157     c-8.567-8.089-22.069-7.701-30.157,0.866C25.273,127.47,0,189.781,0,256c0,141.382,114.618,256,256,256s256-114.618,256-256     S397.382,0,256,0z"/>
	<path d="M240.919,271.079c8.331,8.331,21.839,8.331,30.17,0s8.331-21.839,0-30.17l-85.333-85.333     c-8.331-8.331-21.839-8.331-30.17,0s-8.331,21.839,0,30.17L240.919,271.079z"/>
</svg>);

const shovel = (<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="22px" height="22px" viewBox="0 0 512 512">
	<path fill="#707487" d="M262.039,2.392c-3.396-3.19-8.685-3.19-12.081,0c-93.273,87.541-99.653,229.615-99.882,235.623  c-0.086,2.397,0.802,4.724,2.465,6.448c1.664,1.732,3.957,2.707,6.358,2.707h194.202c2.401,0,4.694-0.974,6.358-2.707  c1.664-1.725,2.552-4.052,2.465-6.448C361.696,232.008,355.321,89.933,262.039,2.392z"/>
	<path fill="#65687A" d="M262.039,2.392c-1.698-1.594-3.867-2.391-6.039-2.391v247.169h97.101  c2.401,0,4.694-0.974,6.358-2.707c1.664-1.725,2.552-4.052,2.465-6.448C361.696,232.008,355.321,89.933,262.039,2.392z"/>
	<path fill="#5B5D6E" d="M256,185.388L256,185.388c-9.751,0-17.655,7.904-17.655,17.655v105.928h35.309V203.043  C273.655,193.292,265.75,185.388,256,185.388z"/>
	<path fill="#C7CFE2" d="M282.482,317.798h-52.964v-8.827c0-4.875,3.952-8.827,8.827-8.827h35.309  c4.875,0,8.827,3.952,8.827,8.827V317.798z"/>
	<path fill="#FFDCA0" d="M229.518,317.798v167.72C229.518,500.144,241.374,512,256,512c14.626,0,26.482-11.856,26.482-26.482  v-167.72H229.518z M256,494.346c-4.875,0-8.827-3.952-8.827-8.827s3.952-8.827,8.827-8.827c4.875,0,8.827,3.952,8.827,8.827  S260.875,494.346,256,494.346z"/>
</svg>);

const active = { backgroundColor: '#888c', boxShadow: 'inset 0 0 3px black' };

const NavBottom = props => {
  return (<footer id="bottomNav" style={props.width < 16 ? {backgroundColor: '#a1835b', borderRadius: '.5rem', marginTop: '.25rem', boxShadow: '0 0 3px black' } : {}}>
		<div className="botTag" style={props.width < 16 ? {boxShadow: 'none'} : {}}>
			<div>{flag} {props.flags}</div>
    </div>
    <div className="botTag" style={props.width < 16 ? {boxShadow: 'none'} : {}}>
			<div>{stopwatch} {props.time}</div>
		</div>
		<div className="botTag" style={props.width < 16 ? {boxShadow: 'none'} : {}}>
			<div className="toolControls" style={props.tool ? active : {}} onClick={() => props.updateTool("shovel")}>{shovel}</div>
			<div className="toolControls" style={!props.tool ? active : {}} onClick={() => props.updateTool("flag")}>{flag}</div>
		</div>
  </footer>);
}

export default NavBottom;