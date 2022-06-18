import React from "react";

const Adjustor = props => {
  const right = (<svg onClick={() => {props.adj(props.name, 1, props.min, props.max)}} xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512">
    <path fill="#CEE8FA" d="M276.374,396.86l104.858-121.578c9.555-11.079,9.555-27.485,0-38.563L276.374,115.14  c-8.869-10.284-21.774-16.196-35.353-16.196l0,0c-39.953,0-61.448,46.922-35.353,77.177l52.262,60.597  c9.555,11.079,9.555,27.485,0,38.563l-52.262,60.597c-26.095,30.255-4.6,77.177,35.353,77.177l0,0  C254.6,413.055,267.505,407.144,276.374,396.86z"/>
    <g>
      <path fill="#2D527C" d="M241.021,428.761c-24.702,0-46.437-13.95-56.724-36.407s-6.656-48.027,9.477-66.733l52.262-60.597   c4.437-5.144,4.437-12.904,0-18.047l-52.262-60.597c-16.133-18.705-19.764-44.275-9.477-66.733s32.022-36.409,56.724-36.409   c18.163,0,35.385,7.889,47.247,21.644l104.856,121.578c14.524,16.839,14.524,42.238,0,59.078l-104.858,121.58   C276.405,420.872,259.184,428.761,241.021,428.761z M241.021,114.65c-12.451,0-22.98,6.758-28.166,18.079   c-5.186,11.321-3.429,23.707,4.704,33.136l52.262,60.597c14.524,16.839,14.524,42.238,0,59.078l-52.262,60.597   c-8.132,9.428-9.89,21.817-4.704,33.135c5.186,11.319,15.715,18.079,28.166,18.079c9.018,0,17.57-3.917,23.459-10.746   l104.859-121.58c4.437-5.144,4.437-12.904,0-18.047L264.48,125.398C258.589,118.567,250.039,114.65,241.021,114.65z"/>
      <path fill="#2D527C" d="M265.636,512c-141.16,0-256-114.842-256-256s114.84-256,256-256   c102.647,0,195.069,60.985,235.457,155.364c3.413,7.974-0.286,17.205-8.26,20.617c-7.98,3.418-17.207-0.286-20.618-8.26   c-35.436-82.806-116.524-136.31-206.579-136.31C141.796,31.411,41.047,132.16,41.047,256s100.749,224.589,224.589,224.589   c88.898,0,169.569-52.551,205.521-133.88c3.507-7.933,12.784-11.523,20.714-8.015c7.934,3.507,11.522,12.781,8.016,20.714   C458.908,452.105,366.96,512,265.636,512z"/>
    </g>
  </svg>);

  const left = (<svg onClick={() => {props.adj(props.name, -1, props.min, props.max)}} xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512">
    <path fill="#F4B2B0" d="M247.373,115.14L142.516,236.718c-9.555,11.079-9.555,27.485,0,38.563L247.373,396.86  c8.869,10.282,21.774,16.196,35.353,16.196l0,0c39.953,0,61.448-46.922,35.353-77.177l-52.262-60.597  c-9.555-11.079-9.555-27.485,0-38.563l52.262-60.597c26.095-30.255,4.6-77.177-35.353-77.177l0,0  C269.148,98.945,256.242,104.856,247.373,115.14z"/>
    <g>
      <path fill="#B3404A" d="M282.727,428.761c-18.163,0-35.385-7.889-47.247-21.644L130.623,285.539   c-14.524-16.839-14.524-42.238,0-59.078l104.858-121.58c11.861-13.753,29.082-21.642,47.245-21.642   c24.702,0,46.437,13.95,56.724,36.407c10.287,22.457,6.656,48.027-9.477,66.733l-52.262,60.597c-4.437,5.144-4.437,12.904,0,18.047   l52.262,60.597c16.133,18.705,19.764,44.275,9.477,66.733C329.163,414.81,307.428,428.761,282.727,428.761z M282.727,114.65   c-9.018,0-17.57,3.917-23.459,10.746l-104.859,121.58c-4.437,5.144-4.437,12.904,0,18.047l104.858,121.58   c5.891,6.83,14.441,10.747,23.461,10.747c12.451,0,22.98-6.758,28.166-18.079s3.428-23.707-4.704-33.136l-52.262-60.597   c-14.524-16.839-14.524-42.238,0-59.078l52.262-60.597c8.132-9.428,9.89-21.817,4.704-33.135S295.178,114.65,282.727,114.65z"/>
      <path fill="#B3404A" d="M260.145,512c-141.16,0-256-114.842-256-256s114.84-256,256-256   c115.451,0,217.09,77.753,247.163,189.082c2.262,8.374-2.693,16.997-11.068,19.258c-8.374,2.262-16.993-2.692-19.258-11.066   C450.603,99.615,361.435,31.411,260.145,31.411C136.306,31.411,35.556,132.16,35.556,256s100.749,224.589,224.589,224.589   c88.898,0,169.569-52.551,205.521-133.88c3.507-7.933,12.783-11.523,20.714-8.015c7.934,3.507,11.522,12.781,8.016,20.714   C453.419,452.105,361.471,512,260.145,512z"/>
    </g>
  </svg>);

  return (<div className="adjustor">
    {left}{right}
  </div>);
}

class Controls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: props.height,
      width: props.width,
      mines: props.mines,
      winH: window.innerHeight,
      winW: window.innerWidth,
    }

    this.adj = this.adj.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  adj(change, inc, min, max) {
    const update = this.state[change];
    if (update + inc <= max && update + inc >= min) {
      this.setState({ [change]: update + inc });
      if (change !== 'mines') {
        this.setState({ mines: Math.round(this.state.height * this.state.width / 6.3) });
      }
    }
  }

  handleKeyPress(e) {
    // r
    if (e.keyCode === 82) {
      this.props.new(this.state.height, this.state.width, this.state.mines);
    }

    if (e.shiftKey) {
      const { winH, winW } = this.state;
      const area = this.state.height * this.state.width;
      // u
      if (e.keyCode === 85) {
        this.adj('height', -1, 5, Math.floor(winH / 25 - 7) < 30 ? Math.floor(winH / 25 - 7) : 30);
      // i
      } else if (e.keyCode === 73) {
        this.adj('height', 1, 5, Math.floor(winH / 25 - 7) < 30 ? Math.floor(winH / 25 - 7) : 30);
      // j
      } else if (e.keyCode === 74) {
        this.adj('width', -1, 5, Math.floor(winW / 25 - 4) < 60 ? Math.floor(winW / 25 - 4) : 60);
      // k
      } else if (e.keyCode === 75) {
        this.adj('width', 1, 5, Math.floor(winW / 25 - 4) < 60 ? Math.floor(winW / 25 - 4) : 60);
      // n
      } else if (e.keyCode === 78) {
        this.adj('mines', -1, Math.round(area / 8), Math.round(area / 4));
      // m
      } else if (e.keyCode === 77) {
        this.adj('mines', 1, Math.round(area / 8), Math.round(area / 4));
      }
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    const height = (<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
      <path d="M12 22V2M12 22L8 18M12 22L16 18M12 2L8 6M12 2L16 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);

    const width = (<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
      <path d="M22 12H2M22 12L18 16M22 12L18 8M2 12L6 16M2 12L6 8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);

    const mine = (<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 64 64" version="1.1">
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

    const area = this.state.height * this.state.width;
    const min = Math.round(area / 8);
    const max = Math.round(area / 4);
    const { winH, winW } = this.state;
    return (<header id="controls" className="navMid">
      <div className="controls">
        <div className="controlInput">{height} {this.state.height} <Adjustor min={5} max={Math.floor(winH / 25 - 7) < 30 ? Math.floor(winH / 25 - 7) : 30} value={this.state.height} adj={this.adj} name={"height"} /></div>
        <div className="controlInput">{width} {this.state.width} <Adjustor min={5} max={Math.floor(winW / 25 - 4) < 60 ? Math.floor(winW / 25 - 4) : 60} value={this.state.width} adj={this.adj} name={"width"} /></div>
        <div className="controlInput">{mine} {this.state.mines} <Adjustor min={min} max={max} value={this.state.mines} adj={this.adj} name={"mines"} /></div>
      </div>
      <div>
        <button className="newBtn" onClick={() => this.props.new(this.state.height, this.state.width, this.state.mines)}>New</button>
      </div>
    </header>);
  }
}

export default Controls;