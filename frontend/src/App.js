import React from "react";
import './App.css';

import Field from "./components/Field";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<main>
      <div className="boardContainer">
        <Field />
      </div>
    </main>);
  }
};

export default App;