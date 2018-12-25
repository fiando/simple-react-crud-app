import React, { Component } from "react";

export default class TopActions extends Component {
  render() {
    return (
      <div>
        <a
          href="#"
          onClick={() => this.props.changeAppMode("create")}
          className="btn btn-primary margin-bottom-1em"
        >
          Create product
        </a>
      </div>
    );
  }
}
