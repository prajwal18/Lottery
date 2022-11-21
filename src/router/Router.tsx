import { Routes, Route } from "react-router-dom";
import CountDown from "../components/Counter";
import Lottery from "../pages/lottery/Lottery";
import { Upload, Proceed } from "../pages/upload/Upload";

const Router = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<div>home</div>} />
                <Route path="/next" element={<Upload/>} />
                <Route path="/lottery-start" element={<Proceed/>} />
                <Route path="/lottery" element={<Lottery/>} />
            </Routes>
        </>
    );
}
export default Router;