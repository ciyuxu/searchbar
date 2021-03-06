import React, { PureComponent } from "react";
import "./Searchbar.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import SearchResult from "./SearchResult";

class Searchbar extends PureComponent {
  constructor(prop) {
    super(prop);
    this.state = {
      input: "",
      border: "1px solid grey"
    };
  }

  updateSearch(event) {
    this.setState({
      input: event.target.value
    });
  }

  onFocus() {
    this.setState({
      border: "3px solid grey"
    });
  }

  onBlur() {
    this.setState({
      border: "1px solid grey"
    });
  }

  cleartext(event, input) {
    event.preventDefault();
    this.setState({
      input: ""
    });
    this.textInput.focus();
  }

  render() {
    return (
      <div className="Searchbar">
        <form className="Searchform">
          <input
            className="Search-text"
            placeholder="Search..."
            type="text"
            alt="Type your search here"
            value={this.state.input}
            onChange={this.updateSearch.bind(this)}
            style={{ border: this.state.border }}
            onFocus={this.onFocus.bind(this)}
            onBlur={this.onBlur.bind(this)}
            ref={input => (this.textInput = input)}
          />
          <button className="Search-button" type="submit" alt="Search button">
            <i className="fa fa-search fa-2x" aria-hidden="true" />
          </button>

          {this.state.input !== "" ? (
            <button
              className="Searchclear"
              onClick={this.cleartext.bind(this)}
              alt="Clear Search text button"
            >
              <i className="fa fa-times fa-2x" aria-hidden="true" />
            </button>
          ) : null}

          {this.state.input.length > 2 ? (
            <SearchResult query={this.state.input} />
          ) : null}
        </form>
      </div>
    );
  }
}

export default Searchbar;
