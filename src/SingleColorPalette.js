import React, { Component } from 'react';
import ColorBox from './colorBox'; 

export class SingleColorPalette extends Component {
  constructor(props) {
    super(props); 
    this._shade = this.gatherShades(this.props.palette, this.props.colorId); 
    console.log(this._shade); 
  }
  gatherShades = (palette, colorToFilterBy) => {
    let shades = []; 
    let allColors = palette.colors; 
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      )
    }
    return shades.slice(1); 
  }
  render() {
    const colorBox = this._shade.map(color => (
      <ColorBox key={color.name} name={color.name} background={color.hex}/>
    ))
    return (
      <div className="palette">
        <h1>single color palette</h1>
        <div className="palette-colors">{colorBox}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
