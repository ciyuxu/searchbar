import React, { PureComponent } from "react";
import "./Searchbar.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

class Searchbar extends PureComponent {
  render() {
    return (
      <div className="Searchbar">
        <form className="Searchform">
          <input
            className="Search-text"
            placeholder="Search..."
            type="text"
            alt="Type your search here"
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
