import React, { Component } from 'react';
import ColorBox from './colorBox';
import './palette.css'; 

class  Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => {
      return <ColorBox background={color.color} name={color.name}/>
    })
    return (
      <div className="palette">
        {/* headers */}
        <div className='palette-colors'> {colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
