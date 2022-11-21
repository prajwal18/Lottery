import { Routes, Route } from "react-router-dom";

const Router = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<div>home</div>} />
                <Route path="/next" element={<div>next</div>} />
            </Routes>
        </>
    );
}
export default Router;