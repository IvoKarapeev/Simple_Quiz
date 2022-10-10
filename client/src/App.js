import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";

import { Routes,Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Navbar />
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                </Routes>
        </div>
    )
};

export default App;
