import React, { Component } from "react";
import "./../css/SearchBox.css";

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      isFocus: false
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus() {
    this.setState({ isFocus: true });
  }
  
  onBlur() {
    this.setState({isFocus: false});
  }

  render() {
    let { isFocus } = this.state;
    const classNames = require("classnames");
    const className = classNames("search-btn", {
      active: isFocus
    });
    return (
      <div className="SearchBox">
        <input
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          type="text"
          placeholder="Type something to search..."
        />
        <div className={className}>
          <a href="#">
            <img
              src="https://image.flaticon.com/icons/svg/483/483356.svg"
              width="15"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default SearchBox;
