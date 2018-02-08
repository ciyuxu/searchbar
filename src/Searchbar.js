import React, { PureComponent } from "react";

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
          <button className="Search-button " type="submit" />
        </form>
      </div>
    );
  }
}

export default Searchbar;
