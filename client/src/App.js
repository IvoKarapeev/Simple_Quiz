import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import Logout from "./components/Logout/Logout";
import QuizOne from "./components/Quiz/QuizOne";
import WrongAnswer from "./components/WrongAnswer/WrongAnswer";

import { Routes,Route, useNavigate } from "react-router-dom";
import useLocalStorige from "./hooks/useLocalStorige";
import { useDispatch, useSelector } from 'react-redux';
import { compliteQuestion } from "./features/quiz/quizSlice";
import users from './users';
import { QuizContext } from "./context/QuizContext";
import QuizTwo from "./components/Quiz/QuizTwo";


function App() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [auth,setAuth] = useLocalStorige('auth',{});
    const quiz = useSelector((state) => state.quiz);

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

    const correctAnswer = (question) => {
        if (question === 1) {
            dispatch(compliteQuestion());
            navigate('/quiz/2');
        }else{
            let score = quiz.score;
            if (score <= question - 1) {
                dispatch(compliteQuestion());
                navigate(`/quiz/${question+1}`);
            }
        }
    };

    const wrongAnswer = () => {
        navigate('/wrong');
    };


    return (
        <div>
            <Navbar auth={auth}/>
                <QuizContext.Provider value={{correctAnswer,wrongAnswer}}>
                    <Routes>
                        <Route path='/' element={<HomePage />}/>
                        <Route path='/user/register' element={<Register register={register}/>}/>
                        <Route path='/user/login' element={<Login login={login}/>}/>
                        <Route path='/user/logout' element={<Logout logoutHandler={logout}/>}/>
                        <Route path='/about' element={<About />}/>
                        <Route path='/wrong' element={<WrongAnswer />}/>
                        <Route path='/quiz/1' element={<QuizOne />}/>
                        <Route path='/quiz/2' element={<QuizTwo />}/>
                    </Routes>
                </QuizContext.Provider>
        </div>
    )
};

export default App;
