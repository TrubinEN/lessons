import React, { Component } from "react";
import videoLink from "./Video.mp4";
import "./VideoPlayer.css";

export default class VideoPlayer extends Component {
  static displayName = "VideoPlayer";

  handleClickPlay = () => {
    this.video.play();
  };
  handleClickStop = () => {
    this.video.pause();
  };
  render() {
    return (
      <div className="video-player">
        <video
          ref={element => (this.video = element)}
          className="video-player__source"
        >
          <source src={videoLink} type="video/mp4" />
        </video>
        <div>
          <button onClick={this.handleClickPlay}>Play</button>
          <button onClick={this.handleClickStop}>Stop</button>
        </div>
      </div>
    );
  }
}
