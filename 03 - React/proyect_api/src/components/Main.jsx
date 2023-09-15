import React, { Component } from "react";
import { Characters } from "./Characters";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { arrays: [] };
  }

  componentDidMount() {}

  render() {
    return (
      <section>
        <div>
          <Characters />
        </div>
      </section>
    );
  }
}
