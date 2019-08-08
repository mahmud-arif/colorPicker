import React, { Component } from 'react';
import './colorBox.css'; 

class ColorBox extends Component {
  render() {
    const { background, name } = this.props; 
    return (
      <div style={{ background}} className='colorBox'>
        <div clasName='copy-container'>
          <div className='box-content'>
            <span>{name}</span>
          </div>
            <button className='copy-btn'>Copy</button>
        </div>
          <span className='see-more'>More</span>
      </div>
    );
  }
}

export default ColorBox;
