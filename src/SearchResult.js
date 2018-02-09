import React, { PureComponent } from "react";

class SearchResult extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      SearchResults: []
    };
  }

  componentDidMount() {
    this.doSearch();
  }

  componentDidUpdate() {
    this.doSearch();
  }

  doSearch() {
    const url = `.api/_search?=${encodeURIComponent(this.props.query)}`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(results => {
        this.setState({
          searchResults: results
        });
      })
      .catch(error => {
        this.setState({
          error: `error searching for ${this.props.query}`
        });
      });
  }

  render() {
    return (
      <div className="searchResult">
        <h2>Result:{this.state.searchResults} </h2>
        <h2>{this.state.error}</h2>
      </div>
    );
  }
}

export default SearchResult;
