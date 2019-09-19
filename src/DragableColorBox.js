import React from 'react';
import { withStyles } from '@material-ui/styles'; 

const styles = {
  root: {
      width: "20%",
      height: "26%",
      margin: "0 auto",
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      marginBottom: "-3.5px",
  }
}

const DragableColorBox = (props) => {
  return (
    <div className={props.classes.root} style={{backgroundColor: props.color}}>{props.name}</div>
  );
}

export default withStyles(styles)(DragableColorBox);
