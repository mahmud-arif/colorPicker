import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './colorBox.css'; 

class ColorBox extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      copied: false
    }
  }
   changeState = () => {
      this.setState({copied: true}, ()=>{setTimeout(() => {
         this.setState({copied: false})
      }, 1500);})
  }
  render() {
    const { background, name } = this.props; 
    const { copied } = this.state; 
    return (
      <CopyToClipboard text={name} onCopy={this.changeState}>
        <div style={{ background }} className='colorBox'>
          <div style={{ background }} className={`copy-overlay ${copied && 'show'}`} />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>copied!</h1>
            <p>{this.props.background}</p>
           </div>
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