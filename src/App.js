import React, { Component } from 'react';
import {Route, Switch} from 'react-router'
import colorSeeds from './seedColors'; 
import { generatePalette } from './colorHelper'; 
import Palette from './Palette'; 

class App extends Component {
  findPalette = id => { return colorSeeds.find(color => color.id === id) }; 

  
  render() {
    console.log(this.findPalette('flat-ui-colors-aussie'))
    return (
      
      <Switch>
        <Route exact path="/" render={() => <div>root page</div>} />
        <Route
          exact path="/palette/:id"
          render={routerProps => <Palette palette={generatePalette(this.findPalette(routerProps.match.params.id))} />} />
      </Switch>
      // <div >
      //   <Palette palette={generatePalette(colorSeeds[4])}/>
      // </div>
    );
  }
}

export default App;
