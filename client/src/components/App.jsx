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
        <span>hello</span>
      </div>
    )
  }
};

export default App;