import React, { Component } from 'react';
import PaletteFooter from './PaletteFooter'; 
import NavBar from './NavBar'; 
import ColorBox from './colorBox'; 

export class SingleColorPalette extends Component {
  constructor(props) {
    super(props); 
    this._shade = this.gatherShades(this.props.palette, this.props.colorId); 
    this.state = { format: "hex" }; 
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

  changeFormat = (value) => {
    this.setState({format: value})
  }
  render() { 
    const { format } = this.state; 
    const { PaletteName, emoji } = this.props.palette; 
    const colorBox = this._shade.map(color => (
      <ColorBox key={color.name} name={color.name} background={color[format]}/>
    ))
    return (
      <div className="palette">
        <NavBar handleChange={this.changeFormat}/>
        <div className="palette-colors">{colorBox}</div>
        <PaletteFooter paletteName={PaletteName} emoji={emoji}/>
      </div>
    );
  }
}

export default SingleColorPalette;
