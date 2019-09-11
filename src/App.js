import React, {Component} from 'react';
import colorSeeds from './seedColors'; 
import { generatePalette } from './colorHelper'; 
import Palette from './Palette'; 

class App extends Component {
  render() {
    console.log(generatePalette(colorSeeds[4])); 
    return(
      <div >
        <Palette palette={generatePalette(colorSeeds[4])}/>
      </div>
    );
  }
}

export default App;
