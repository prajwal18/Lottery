import React from 'react';
import Odometer from 'react-odometerjs';

function App() {
  return (
    <div className="App">
      <h1> Hello Boss </h1>
      <Odometer value={1234} format="(.ddd),dd" />;
    </div>
  );
}

export default App;
