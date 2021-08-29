import React from 'react';

import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onInputSubmit = async (input) => {
    const res = await youtube.get('/search', {
      params: {
        q: input,
      },
    });

    this.setState({ videos: res.data.items });
  };

  onVideoSelect = (video) => {
    console.log('From App', video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onInputSubmit} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
