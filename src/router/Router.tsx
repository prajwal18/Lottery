import { Routes, Route } from "react-router-dom";
import Lottery from "../pages/lottery/Lottery";
import { Upload, Proceed } from "../pages/upload/Upload";
import WelcomePage from "../pages/welcomepage/WelcomePage";

const Router = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<WelcomePage/>} />
                <Route path="/upload" element={<Upload/>} />
                <Route path="/lottery-start" element={<Proceed/>} />
                <Route path="/lottery" element={<Lottery/>} />
            </Routes>
        </>
    );
}
export default Router;