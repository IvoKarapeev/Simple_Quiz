import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";

import { Routes,Route } from "react-router-dom";
import Register from "./components/Register/Register";

function App() {
    return (
        <div>
            <Navbar />
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/user/register' element={<Register />}/>
                </Routes>
        </div>
    )
};

export default App;
