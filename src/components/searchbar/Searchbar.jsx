import React, { Component } from "react";
import './searchbar.css'
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';



 class SearchBar extends Component {
  state = {
     searchQuery: ''
  };

   handleQueryChange = event => {
     this.setState({ searchQuery: event.currentTarget.value.toLowerCase() })
   };

  handleSubmit = event => {
    event.preventDefault();
    const { searchQuery } = this.state;
    const { onSubmit } = this.props;

    if (searchQuery.trim() === '') {
        toast.error("Enter correct name!")
      return;
}
    onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
  };


  render() {
    return (
      <header className="searchbar">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="searchForm-button">
            <span className="searchForm-button"></span>
          </button>

          <input
            className="searchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleQueryChange}
            value={this.state.searchQuery}
          />
        </form>
      </header>
    );
  }
};

   SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;