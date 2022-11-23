import { useState, useEffect } from 'react';
import Lottie from "lottie-react";
import styled from "styled-components";
import CountDown from '../../components/Counter';
import { useLocation } from 'react-router-dom'
import OdometerContainer from '../../components/OdometerContainer';
import { GoBackToHome } from '../upload/Upload';
import Celebrate from "../../assets/celebrate.json";
import Firework from "../../assets/firework.json";

//Styled component
const Winner = styled.h1`
  position: absolute;
  font-size: 4rem;
  color: white;
  bottom: 70px; left:0px;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`;
//Styled component

function Lottery() {
  const [values, setValues] = useState<Array<number>>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [desiredNum, setDesiredNum] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [show, setShow] = useState(false);
  const [showFirework, setShowFirework] = useState(false);
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
        setTimeout(() => {
          setShowFirework(true);
        }, 2000)
      }, 10000)
    }
  }

  useEffect(() => {
    if (location.state && location.state.allowAccess) {
      setDesiredNum(location.state.winningNumber.phone);
    }
    if (!countDown) {
      generateWinner();
    }
    return () => { }
  }, [countDown]);

  const location = useLocation();

  if (!(location.state && location.state.allowAccess)) {
    return (
      <GoBackToHome />
    )
  }

  return (
    <div className="App">
      <div className='container'>
        <>
          {countDown ?

            <CountDown
              duration={1}
              setCountDown={setCountDown}
            />

            :
            <>
              <OdometerContainer values={values} />
              {show && <Lottie className='lottie' animationData={Celebrate} loop={true} />}
              {showFirework && <Lottie className='firework' animationData={Firework} loop={true} />}
              {show && <Winner>Winner: {location.state.winningNumber.name}</Winner>}
            </>
          }
        </>
      </div>
    </div>
  );
}

export default Lottery;