import { CountdownCircleTimer } from "react-countdown-circle-timer";

const CountDown = ({duration, setCountDown}: {duration: number, setCountDown: (value:any) => void}) => {
    return(
        <div style={{flexGrow: "1", display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div style={{background: "rgba(0,0,0,0)"}}>
                <CountdownCircleTimer
                isPlaying
                duration={duration}
                colors={'#004777'}
                onComplete={() => {
                    setCountDown(false);
                    return { shouldRepeat: false, delay: 1.5 } // repeat animation in 1.5 seconds
                }}
                >
                {({ remainingTime }) => <p style={{color: "white", fontSize: "3rem"}}>{remainingTime}</p>}
                </CountdownCircleTimer>
            </div>
        </div>
    );
} 
export default CountDown;