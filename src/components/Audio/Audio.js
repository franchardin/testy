import React, { Component } from 'react';
import './Audio.css'

export default class Audio extends Component {
  render() {
    return(
      <audio controls>
        <source src="https://www.w3schools.com/tags/horse.mp3" type="audio/mpeg" />
      </audio>
    )
  }
}
