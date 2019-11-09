import React, { Component } from "react";
import { connect } from "react-redux";
import { sendMessage } from "./Chat";

class App extends Component {
  render() {
    const { feed, sendMessage } = this.props;
    return (
      <div className="App">
        <h1>Hello Bot!</h1>
        <ul>
          {feed.map(entry => (
            <li>{entry.text}</li>
          ))}
        </ul>
        <input
          tyoe="text"
          onKeyDown={e =>
            e.keyCode === 13 ? sendMessage(e.target.value) : null
          }
        ></input>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  feed: state
});

export default connect(
  mapStateToProps,
  { sendMessage }
)(App);
