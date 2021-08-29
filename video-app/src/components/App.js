import React from 'react';

import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = { videos: [] };

  onInputSubmit = async (input) => {
    const res = await youtube.get('/search', {
      params: {
        q: input,
      },
    });

    this.setState({ videos: res.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onInputSubmit} />
        Videos: {this.state.videos.length}
      </div>
    );
  }
}

export default App;
