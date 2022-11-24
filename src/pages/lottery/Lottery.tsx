import { useState, useEffect } from 'react';
import Lottie from "lottie-react";
import styled from "styled-components";
import CountDown from '../../components/Counter';
import { useLocation } from 'react-router-dom'
import OdometerContainer from '../../components/OdometerContainer';
import { GoBackToHome } from '../upload/Upload';
import Celebrate from "../../assets/celebrate.json";
import Firework from "../../assets/firework.json";
import AniversaryImage from "../../assets/images/41.png"
import Banner from "../../assets/images/banner.jpg"
import { motion } from "framer-motion"

//Styled component
const Winner = styled.h1`
  // position: absolute;
  font-size: 2.5rem;
  color: white;
  bottom: -1.5rem; left:0px;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`;

const WinnerTitle = styled.h1`
  // position: absolute;
  font-size: 2rem;
  font-weight:400;
  color: white;
  bottom: 1em; left:0px;
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
    <div className='container'>
      <>
        {countDown ?
          <CountDown
            duration={1}
            setCountDown={setCountDown}
          />
          :
          <>
            <motion.img initial={{ opacity: 0 }} transition={{ duration: 3 }} animate={{ opacity: 1 }} src={AniversaryImage} height="300" className='a-logo' />
            <motion.div className="glass-effect" initial={{ scale: 0.2 }} transition={{ duration: 2 }} animate={{ scale: show ? 0.5 : 0.8 }} >
              <OdometerContainer values={values} />
            </motion.div>
            {show && <Lottie className='lottie' animationData={Celebrate} loop={true} />}
            {showFirework && <Lottie className='firework' animationData={Firework} loop={true} />}
            {show && <motion.div className="center-div" initial={{ opacity: 0 }} transition={{ duration: 2 }} animate={{ opacity: 1 }}>
              <WinnerTitle>Winner</WinnerTitle>
              <Winner> {location.state.winningNumber.name}</Winner>
              <motion.img initial={{ opacity: 0 }} transition={{ duration: 3 }} animate={{ opacity: 1 }} src={Banner} className="prize pt-5" height="300" />
            </motion.div>}
          </>
        }
      </>
      {/* <div>
        <motion.img initial={{ opacity: 0 }} transition={{ duration: 3 }} animate={{ opacity: 1 }} src={Banner} height="300" />
      </div> */}
    </div>
  );
}

export default Lottery;