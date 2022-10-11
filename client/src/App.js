import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import About from "./components/About/About";

import { Routes,Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Navbar />
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/user/register' element={<Register />}/>
                    <Route path='/user/login' element={<Login />}/>
                    <Route path='/about' element={<About />}/>
                </Routes>
        </div>
    )
};

export default App;
