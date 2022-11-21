import { useState, useEffect } from 'react';
import Odometer from 'react-odometerjs';
import Lottie from "lottie-react";
import Celebrate from  "../../assets/celebrate.json";
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styled from "styled-components";
import CountDown from '../../components/Counter';

//Styled component
const CustomCountDown = styled(CountdownCircleTimer)`
    display:flex;
    width: 500px; height: 500px;
`;
//Styled component

function Lottery() {
  const [values, setValues] = useState<Array<number>>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [desiredNum, setDesiredNum] = useState([9, 8, 6, 9, 5, 2, 4, 5, 6, 0]);
  const [show, setShow] = useState(false);
  const [countDown, setCountDown] = useState(true);

  const generateWinner = async () => {
    if (JSON.stringify(values) === JSON.stringify(desiredNum)) {
      setValues([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      return;
    } else {
      for (let i = 1; i <= desiredNum.length; i++) {
        const timeout = 1000 * (i - 1);
        setTimeout(() => {
          let newValue = [...desiredNum.slice(0, i), ...values.slice(i)];
          setValues(newValue);
        }, timeout);
      }
      setTimeout(() => {
        setShow(true);
      }, 10000)
    }
  }

  useEffect(() => {
    if (!countDown) {
      generateWinner();
    }
    return () => { }
  }, [countDown])


  return (
    <div className="App">
      <div className='container'>
        {countDown ?

        <CountDown
            duration={2}
            setCountDown={setCountDown}
        />

        :
          <>
            <div className='counter'>
              {
                values.map((value, index) => (
                  <Odometer
                    key={index}
                    format="dddd-ddd-ddd"
                    duration={2000}
                    value={value}
                    // theme="custom"
                  />
                ))
              }
            </div>
            {show && <Lottie className='lottie' animationData={Celebrate} loop={true} />}

            {show && <div className='winner'>
              Winner Chris Thapa</div>
            }
          </>
        }
      </div>
    </div>
  );
}

export default Lottery;