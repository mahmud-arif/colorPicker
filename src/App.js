import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import colorSeeds from './seedColors'; 
import SingleColorPalette from './SingleColorPalette'; 
import PaletteList from './PaletteList'; 
import { generatePalette } from './colorHelper'; 
import Palette from './Palette'; 

class App extends Component {
  findPalette = id => { return colorSeeds.find(color => color.id === id) }; 

  
  render() {
    console.log(this.findPalette('flat-ui-colors-aussie'))
    return (
      
      <Switch>
        <Route exact
          path='/palette/:paletteId/:colorId'
          render={(routerProps) =>
            <SingleColorPalette
              colorId = {routerProps.match.params.colorId}
              palette={generatePalette(this.findPalette(routerProps.match.params.paletteId))} />}
        />

        <Route
          exact path="/"
          render={(routeProps) =>
            <PaletteList palettes={colorSeeds} {...routeProps} />}
        />
        <Route
          exact path="/palette/:id"
          render={routerProps =>
            <Palette
              palette={generatePalette(this.findPalette(routerProps.match.params.id))} />}
        />
        
      </Switch>
      // <div >
      //   <Palette palette={generatePalette(colorSeeds[4])}/>
      // </div>
    );
  }
}

export default App;
