import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './colorBox.css'; 

class ColorBox extends Component {
  render() {
    const { background, name } = this.props; 
    return (
      <CopyToClipboard text={name}>
        <div style={{ background}} className='colorBox'>
          <div clasName='copy-container'>
            <div className='box-content'>
              <span>{name}</span>
            </div>
              <button className='copy-btn'>Copy</button>
          </div>
            <span className='see-more'>More</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;