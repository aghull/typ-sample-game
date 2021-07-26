import React from 'react'
import { Page, render } from 'typ-client';
import style from './style.scss';

class TicTacToePage extends Page {
  constructor(props) {
    super(props);
    this.components = {
      mark: Mark
    }
  }
}

const Mark = props => (
  <svg height="90" width="90">
    <text x="0" y="80" style={{ fill: 'red', fontSize: 70 }}>
      {props.children}
    </text>
  </svg>
);

render(TicTacToePage);
