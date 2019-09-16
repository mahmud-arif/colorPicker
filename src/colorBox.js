import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';  
import {CopyToClipboard} from 'react-copy-to-clipboard';
import styles from './styles/ColorBoxStyles'; 



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
    const { background, name , moreUrl, showLink, classes} = this.props; 
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeState}>
        <div style={{ background }} className={classes.colorBox}>
          <div style={{ background }} className={`${classes.copyOverlay} ${copied && classes.overlayShow}`} />
            
          <div className={`${classes.copyMsg} ${copied && classes.msgShow}`}>
            <h1>copied!</h1>
            <p className={classes.copyText}>{this.props.background}</p>
           </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
              <button className={classes.copyBtn}>Copy</button>
          </div>
          {showLink && (<Link to={moreUrl} onClick={e => e.stopPropagation()}>
            <span className={classes.seeMore}>More</span>
          </Link>)}
        </div>
      </CopyToClipboard>
    );
  }
}
export default withStyles(styles)(ColorBox);