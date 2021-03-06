import React from 'react';

class SearchBar extends React.Component {
  state = { input: '' };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.input);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search-bar">Video Search</label>
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
