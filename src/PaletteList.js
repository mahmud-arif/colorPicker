import React, { Component } from 'react';
import MiniPalette from './MiniPalette'; 
import {Link} from 'react-router-dom'

export class PaletteList extends Component {
  render() {
    return (
      <div>
        <h1>react colors</h1>
        {this.props.palettes.map(palette => (
          <MiniPalette {...palette}/>
        ))}
      </div>
    );
  }
}

export default PaletteList;
