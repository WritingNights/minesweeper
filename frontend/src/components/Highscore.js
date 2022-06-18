import React from "react";

class Highscores extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {}
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    if (e.keyCode >= 48 && e.keyCode < 58 && this.props.showTab) {
      let choice = e.keyCode - 48;
      if (e.keyCode === 48) {
        choice = 10;
      }
      if (choice <= this.props.highscores.length) {
        this.setState({ info: this.props.highscores[this.props.highscores.length - choice] });
      }
    }

    if (e.keyCode === 189) {
      this.setState({ info: {} });
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    const { info } = this.state;
    return (<aside className={this.props.showTab ? "highscores showTab" : "highscores"}>
      <div className="pullTag" onClick={this.props.toggleTab}>Highscores</div>
      <div className="scores">
        {info.score ? (<div className="scoreKeeper">
          <div onClick={() => this.setState({ info: {} })} id="keeperCloser">
            <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </div>
          <header>Score: <strong>{info.score}</strong></header>
          <section>H: {info.height} | W: {info.width}</section>
          <section>Mines: {info.mines}</section>
          <footer>Time: {info.time}</footer>
        </div>) : ""}
        {this.props.highscores.map((obj, i) => {
          return <span key={i} title={`Height: ${obj.height}\nWidth: ${obj.width}\nMines: ${obj.mines}\nTime: ${obj.time}`} onClick={() => this.setState({ info: obj })}>{obj.score}</span>;
        })}
      </div>
      <div className="highGuide">
        <div>
          <div className="midBack"><span>1-</span><span>10</span></div>
          <div>Details</div>
        </div>
        <div>
          <div className="largeBack">-</div>
          <div>X</div>
        </div>
      </div>
    </aside>);
  }
}

export default Highscores;