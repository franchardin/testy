import React, { Component } from 'react';
import './List.css'

export default class List extends Component {
  render() {
    return(
      <div>
        <ul>
          <li>Elemento 1</li>
          <li>Elemento 2</li>
          <li>Elemento 3</li>
          <li>Elemento 4</li>
        </ul>
      </div>
    )
  }
}
