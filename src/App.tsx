import React, { useState } from 'react';
import Odometer from 'react-odometerjs';

function App() {
  const [values, setValues] = useState<Array<number>>([0,0,0,0,0,0,0,0,0,0]);
  const [desiredNum, setDesiredNum] = useState([9,8,4,0,4,3,3,4,5,6]);

  const handleOnClick = () => {
    if(JSON.stringify(values) === JSON.stringify(desiredNum)){
      setValues([0,0,0,0,0,0,0,0,0,0])
      return;
    }else{
      for(let i=1; i<=desiredNum.length; i++){
        const timeout = 2000*(i-1);
        setTimeout(() => {
          let newValue = [...desiredNum.slice(0, i), ...values.slice(i)];
          setValues(newValue);
        }, timeout);
      }
    }
  }

  return (
    <div className="App">
      
      <div className='container'>
        <div>
        {
          values.map((value, index) => (
            <Odometer
              key={index}
              format="dddd-ddd-ddd"
              duration={2000}
              value={value}
              theme="custom"
            />
          ) )
        }
        </div>

        <button onClick={handleOnClick}>Change</button>
      </div>

    </div>
  );
}

export default App;
