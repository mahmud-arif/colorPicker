import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class PaletteList extends Component {
  render() {
    return (
      <div>
        <h1>react colors</h1>
        {this.props.palettes.map(palette => (
          <p><Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link></p>
        ))}
      </div>
    );
  }
}

export default PaletteList;
