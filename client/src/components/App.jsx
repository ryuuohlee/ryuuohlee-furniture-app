//import requirements
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    fetch()
  }

  render() {
    return (
      <div>
        <h1>test name</h1>
        <p>test test</p>
        <span>hello</span>
      </div>
    )
  }
};

export default App;