import React, { PureComponent } from "react";
import "./Searchbar.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

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

  onFocus(event) {
    this.setState({
      border: "2px solid grey"
    });
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
          />
          <button className="Search-button" type="submit">
            <i className="fa fa-search fa-2x" aria-hidden="true" />
          </button>
        </form>
      </div>
    );
  }
}

export default Searchbar;
