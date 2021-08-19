import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  state = { lat: null, errorMsg: "" }; 

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMsg: err.message })
    );
  }

  //React says we have to define render
  render() {
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>;
    }
    if (!this.state.errorMsg && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat } />
    }

    return <div>Loading...</div>;
  }
}
 
ReactDom.render(
    <App />,
    document.querySelector('#root')
);
