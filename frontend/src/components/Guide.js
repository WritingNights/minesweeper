import React from "react";

const arrows = (<svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 256 256">
  <path fill="#6669" d="M163.6748,200.6543a7.99949,7.99949,0,0,1-1.73339,8.71826l-28.28418,28.28418a8.00063,8.00063,0,0,1-11.31446,0L94.05859,209.37256a8.00038,8.00038,0,0,1,5.65723-13.65674H120V160a8,8,0,0,1,16,0v35.71582h20.28418A8,8,0,0,1,163.6748,200.6543ZM99.71582,60.28418H120V96a8,8,0,0,0,16,0V60.28418h20.28418a8.00038,8.00038,0,0,0,5.65723-13.65674L133.65723,18.34326a8.00063,8.00063,0,0,0-11.31446,0L94.05859,46.62744a8.00038,8.00038,0,0,0,5.65723,13.65674ZM96,136a8,8,0,0,0,0-16H60.28418V99.71582A8.00038,8.00038,0,0,0,46.627,94.05859L18.34277,122.34326a8,8,0,0,0,0,11.31348L46.627,161.94141a8.00038,8.00038,0,0,0,13.65723-5.65723V136Zm141.65723-13.65674L209.37305,94.05859a8.00038,8.00038,0,0,0-13.65723,5.65723V120H160a8,8,0,0,0,0,16h35.71582v20.28418a8.00018,8.00018,0,0,0,13.65723,5.65723l28.28418-28.28467A8,8,0,0,0,237.65723,122.34326Z"/>
</svg>);

const mouse = (<svg xmlns="http://www.w3.org/2000/svg" width="28.8px" height="28.8px" viewBox="0 0 297 297">
	<path fill="#6669" d="M294.077,251.199l-59.105-59.107l42.167-24.356c3.295-1.903,5.212-5.52,4.938-9.315c-0.274-3.796-2.692-7.101-6.226-8.51   L87.82,74.905c-3.686-1.472-7.895-0.605-10.702,2.201c-2.807,2.808-3.674,7.016-2.203,10.702l74.994,188.053   c1.41,3.534,4.715,5.953,8.511,6.227c3.796,0.276,7.414-1.642,9.316-4.938l24.354-42.167l59.101,59.107   c1.862,1.863,4.39,2.91,7.023,2.91c2.635,0,5.161-1.047,7.023-2.91l28.841-28.845C297.956,261.366,297.956,255.078,294.077,251.199   z"/>
	<path fill="#6669" d="M43.61,29.552c-3.879-3.876-10.166-3.877-14.047,0c-3.878,3.879-3.878,10.168,0,14.047l22.069,22.069   c1.939,1.939,4.48,2.909,7.023,2.909c2.541,0,5.083-0.97,7.022-2.909c3.879-3.879,3.879-10.167,0-14.046L43.61,29.552z"/>
	<path fill="#6669" d="M51.089,98.215c0-5.484-4.447-9.932-9.933-9.932H9.946c-5.485,0-9.933,4.447-9.933,9.932c0,5.485,4.447,9.933,9.933,9.933   h31.21C46.642,108.147,51.089,103.7,51.089,98.215z"/>
	<path fill="#6669" d="M47.063,128.869l-22.072,22.071c-3.878,3.879-3.878,10.168,0,14.046c1.94,1.939,4.482,2.909,7.023,2.909   c2.541,0,5.084-0.97,7.023-2.909l22.071-22.07c3.879-3.879,3.879-10.168,0-14.047C57.23,124.993,50.944,124.992,47.063,128.869z"/>
	<path fill="#6669" d="M98.222,51.078c5.485,0,9.933-4.447,9.933-9.933V9.932c0-5.485-4.447-9.932-9.933-9.932c-5.484,0-9.932,4.446-9.932,9.932   v31.214C88.29,46.631,92.737,51.078,98.222,51.078z"/>
	<path fill="#6669" d="M135.894,64.006c2.543,0,5.084-0.97,7.023-2.909l22.068-22.069c3.879-3.879,3.879-10.168,0-14.047   c-3.879-3.877-10.168-3.877-14.046,0l-22.068,22.07c-3.879,3.879-3.879,10.168,0,14.046   C130.811,63.036,133.352,64.006,135.894,64.006z"/>
</svg>);

const shift = (<svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24" stroke="#6669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#000000">
  <path d="M5,21 L19,21 L5,21 Z M16,12 L16,17 L8,17 L8,12 L3,12 L12,3 L21,12 L16,12 Z"/>
</svg>);

class Guide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shift: false
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyPress(e) {
    if (e.shiftKey) {
      this.setState({ shift: true });
    }
  }

  handleKeyUp(e) {
    if (!e.shiftKey) {
      this.setState({ shift: false });
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (this.state.shift ? (<aside id="guide" className="shiftGuide">
      <div>
        <div>{arrows}</div>
        <div>Move</div>
      </div>
      <div>
        <div className="midBack"><span>I</span><span>U</span></div>
        <div>Height</div>
      </div>
      <div>
        <div className="midBack"><span>K</span><span>J</span></div>
        <div>Width</div>
      </div>
      <div>
        <div className="midBack"><span>M</span><span>N</span></div>
        <div>Mines</div>
      </div>
      <div>
        <div>{shift}</div>
        <div>Unshift</div>
      </div>
    </aside>) : (<aside id="guide" className="guideMain">
      <div>
        <div>{arrows}</div>
        <div>Move</div>
      </div>
      <div>
        <div>{mouse}</div>
        <div>Space</div>
      </div>
      <div>
        <div className="largeBack">X</div>
        <div>Tools</div>
      </div>
      <div>
        <div className="largeBack">H</div>
        <div>High-<br/>scores</div>
      </div>
      <div>
        <div className="largeBack">R</div>
        <div>New</div>
      </div>
      <div>
        <div>{shift}</div>
        <div>Shift</div>
      </div>
    </aside>));
  }
}

export default Guide;