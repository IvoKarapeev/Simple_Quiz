import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import About from "./components/About/About";

import { Routes,Route, useNavigate } from "react-router-dom";
import useLocalStorige from "./hooks/useLocalStorige";
import { useDispatch } from 'react-redux';
import users from './users';
import Logout from "./components/Logout/Logout";

function App() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [auth,setAuth] = useLocalStorige('auth',{});

    const login = (authData) => {
        setAuth(authData);
        navigate('/');
    };

    const register = (authData) => {
        users.push(authData);
        login(JSON.stringify(authData));
    };

    const logout = () => {
        setAuth("{}");
        navigate('/');
    };

    return (
        <div>
            <Navbar auth={auth}/>
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/user/register' element={<Register register={register}/>}/>
                    <Route path='/user/login' element={<Login login={login}/>}/>
                    <Route path='/user/logout' element={<Logout logoutHandler={logout}/>}/>
                    <Route path='/about' element={<About />}/>
                </Routes>
        </div>
    )
};

export default App;
