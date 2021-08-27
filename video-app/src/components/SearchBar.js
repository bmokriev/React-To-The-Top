import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label for="search-bar">Video Search</label>
            <input type="text" id="search-bar"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
