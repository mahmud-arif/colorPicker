import React, { Component } from 'react';
import Navbar from './NavBar'; 
import PaletteFooter from './PaletteFooter'
import {withStyles} from '@material-ui/styles';  
import ColorBox from './colorBox';
import './palette.css'; 

const styles = {
  palette: {
    height: "100vh",
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
    justifyContent: "center",
    boxSizing: "border-box",
  }, 
 colors:  {
    height: "90%"
}

}

class Palette extends Component {
  constructor(props) {
    super(props); 
    this.state = {level : 500, format: "hex"}
  }
  changeLevle = level => this.setState({ level }); 
  changeFrmat = (value) => {
    this.setState({format: value})
  }
  render() {
    const { colors, PaletteName, emoji, id } = this.props.palette; 
    const {classes} = this.props; 
    const { level, format } = this.state; 
    const colorBoxes = colors[level].map(color => {
      return <ColorBox
        background={color[format]}
        name={color.name} key={color.id}
        moreUrl={`/palette/${id}/${color.id}`}
        showLink={true}
      />
    })
    return (
      <div className={classes.palette}>
        <Navbar level={level} changeLevle={this.changeLevle} handleChange={this.changeFrmat} showLevel={true}/>
        <div className={classes.colors}>
          {colorBoxes}
        </div>
        <PaletteFooter paletteName={PaletteName} emoji={emoji}/>
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
