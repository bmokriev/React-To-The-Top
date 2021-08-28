import React from 'react';

class SearchBar extends React.Component {
  state = { input: '' };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
    console.log(this.state.input);
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    //Create a Callback from parent component
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label for="search-bar">Video Search</label>
            <input
              type="text"
              id="search-bar"
              value={this.state.input}
              onChange={this.onInputChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
