import React from 'react';
import colorSeeds from './seedColors'; 
import Palette from './Palette'; 

function App() {
  return (
    <div>
      <Palette {...colorSeeds[4]}/>
    </div>
  );
}

export default App;
