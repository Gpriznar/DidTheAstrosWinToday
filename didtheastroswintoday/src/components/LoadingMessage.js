import React, { Component } from "react";

export class LoadingMessage extends Component {
  render() {
    let loadingMessages = [
      "Loading...",
      "Gathering intel...",
      "Looking up stats...",
      "Wait for it...",
    ];
    let randomIndex = Math.floor(Math.random() * loadingMessages.length);
    let randomLoadingMessage = loadingMessages[randomIndex];

    return (
      <div>
        <p> {randomLoadingMessage} </p>
      </div>
    );
  }
}

export default LoadingMessage;
