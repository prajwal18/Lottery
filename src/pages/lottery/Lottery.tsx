import { useState, useEffect } from 'react';
import Lottie from "lottie-react";
import styled from "styled-components";
import CountDown from '../../components/Counter';
import { useLocation } from 'react-router-dom'
import OdometerContainer from '../../components/OdometerContainer';
import { GoBackToHome } from '../upload/Upload';
import Celebrate from "../../assets/celebrate.json";
import Firework from "../../assets/firework.json";
import { motion } from "framer-motion";
// Images
import bgImg from "../../assets/images/christmas4.jpg"
import FleetPandaLogo from "../../assets/images/fleetpanda.svg";
import GiftImg from "../../assets/images/gifts.png";
import Gift2Img from "../../assets/images/gift2.png";
import OwlImg from "../../assets/images/owlImg.png";
// Images

//Styled component
const Winner = styled.h1`
  font-size: 2.5rem;
  color: white;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`;

const FleetPandaContainer = styled.img`
  display: block;
  width: 400px;
  height: auto;
`;

const GiftImgContainer = styled.div`
  position: absolute;
  padding: 10px;
  left: 10px;
  bottom: 30px;
  width: 400px;
  height: 400px;
`;

const Gift2ImgContainer = styled.div`
  position: absolute;
  padding: 10px;
  right: 10px;
  bottom: 30px;
  width: 400px;
  height: 400px;
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
    <div className='container' style={{backgroundImage:`url(${bgImg})`, backgroundSize:"cover"}}>
      <>
        {
          countDown ?
            <CountDown duration={10} setCountDown={setCountDown} />
            :
            <>
              <motion.div className="index" style={{marginTop: "180px", marginBottom:"50px", background:"white", padding:"5px 10px", borderRadius:"2px"}} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <FleetPandaContainer src={FleetPandaLogo} alt="anniversary" />
              </motion.div>
              <h1 className="index" style={{ fontSize: "3rem", color: "#fcba03" }}>X-Mas Lottery</h1>
              <h1 className="index" style={{ fontSize: "2.2rem", color: "#FFFFFF" }}>WINNER ANNOUNCEMENT</h1>

              <motion.div className="index" initial={{ scale: 0.5 }} transition={{ duration: 1 }} animate={{
                scale: show ? 0.8 : 1
              }}>
                <OdometerContainer values={values} />
              </motion.div>

              {
                show &&
                <>
                  <Lottie className='lottie' animationData={Celebrate} loop={true} />
                  <Lottie className='firework' animationData={Firework} loop={true} />
                </>
              }

              {
                show &&
                <>
                  <h1 className="index" style={{ fontSize: "2.5rem", color: "#d92e2e" }}>CONGRATULATION!!!</h1>
                  <h1 className="index" style={{ fontSize: "3.2rem", color: "#f5f5fa" }}>{location.state.winningNumber.name}</h1>
                </>
              }

              {
                show &&
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
                  <img height="50" src={FleetPandaLogo} alt="Valley cold store" style={{ position: "absolute", top: "30px", left: "50px", background:"white", padding:"5px 10px", opacity: 0.5 }} />
                  <img height="200" src={OwlImg} alt="Valley cold store" style={{ position: "absolute", top: "30px", right: "10px" }} />
                </motion.div>
              }

              {
                show &&
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
                  <GiftImgContainer>
                    <img style={{ height: "100%" }} src={GiftImg} alt="air fryer" />
                  </GiftImgContainer>
                </motion.div>
              }

              {
                show &&
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
                  <Gift2ImgContainer>
                    <img style={{ height: "100%" }} src={Gift2Img} alt="air fryer" />
                  </Gift2ImgContainer>
                </motion.div>
              }
            </>
        }
      </>
    </div>
  );
}

/*


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


*/

export default Lottery;