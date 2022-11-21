// import { useState, useEffect } from 'react';
// import Odometer from 'react-odometerjs';
// import Lottie from "lottie-react";
// import Celebrate from "./assets/celebrate.json";
// import Trophy from "./assets/trophy.json";
// import { CountdownCircleTimer } from 'react-countdown-circle-timer';

// function App() {
//   const [values, setValues] = useState<Array<number>>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
//   const [desiredNum, setDesiredNum] = useState([9, 8, 6, 9, 5, 2, 4, 5, 6, 0]);
//   const [show, setShow] = useState(false);
//   const [countDown, setCountDown] = useState(true);

//   const generateWinner = async () => {
//     if (JSON.stringify(values) === JSON.stringify(desiredNum)) {
//       setValues([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
//       return;
//     } else {
//       for (let i = 1; i <= desiredNum.length; i++) {
//         const timeout = 1000 * (i - 1);
//         setTimeout(() => {
//           let newValue = [...desiredNum.slice(0, i), ...values.slice(i)];
//           setValues(newValue);
//         }, timeout);
//       }
//       setTimeout(() => {
//         setShow(true);
//       }, 10000)
//     }
//   }

//   useEffect(() => {
//     if (!countDown) {
//       generateWinner();
//     }
//     return () => { }
//   }, [countDown])


//   return (
//     <div className="App">


//       <div className='container '>
//         {countDown ? <CountdownCircleTimer
//           isPlaying
//           duration={2}
//           colors="#A30000"
//           onComplete={() => {
//             setCountDown(false);
//             return { shouldRepeat: false, delay: 1.5 } // repeat animation in 1.5 seconds
//           }}
//         >
//           {({ remainingTime }) => <p>{remainingTime}</p>}
//         </CountdownCircleTimer> :
//           <>
//             <div className='counter'>
//               {
//                 values.map((value, index) => (
//                   <Odometer
//                     key={index}
//                     format="dddd-ddd-ddd"
//                     duration={2000}
//                     value={value}
//                     // theme="custom"
//                   />
//                 ))
//               }
//             </div>
//             {show && <Lottie className='lottie' animationData={Celebrate} loop={true} />}

//             {show && <div className='winner'>
//               Winner Chris Thapa</div>
//             }
//           </>
//         }
//       </div>
//     </div>
//   );
// }

// export default App;

export const Ref = () => {
    return (
        <>hello</>
    );
}