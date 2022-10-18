import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import Logout from "./components/Logout/Logout";
import QuizOne from "./components/Quiz/QuizOne";
import bcrypt from 'bcryptjs';
import { Routes,Route, useNavigate } from "react-router-dom";
import useLocalStorige from "./hooks/useLocalStorige";
import { useDispatch, useSelector } from 'react-redux';
import { completeLastQuestion, compliteQuestion,levelUp, startAgain, wrongQuestion } from "./features/quiz/quizSlice";
import { users,salt } from './users';
import { QuizContext } from "./context/QuizContext";
import QuizTwo from "./components/Quiz/QuizTwo";
import QuizThree from "./components/Quiz/QuizThree";
import QuizFour from "./components/Quiz/QuizFour";
import QuizFive from "./components/Quiz/QuizFive";
import QUizSix from "./components/Quiz/QuizSix";
import QuizSeven from "./components/Quiz/QuizSeven";
import QuizEight from "./components/Quiz/QuizEight";
import QuizNine from "./components/Quiz/QuizNine";
import QuizTen from "./components/Quiz/QuizTen";
import Completed from "./components/Completed/Completed";
import QuizEleven from "./components/QuizSecond/QuizEleven";
import QuizTwelve from "./components/QuizSecond/QuezTwelve";
import QuizThirteen from "./components/QuizSecond/QuizThirteen";
import QuizFourteen from "./components/QuizSecond/QuizFourteen";
import QuizFifteen from "./components/QuizSecond/QuizFifteen";
import QuizSixteen from "./components/QuizSecond/QuizSixteen";
import QuizSeventeen from "./components/QuizSecond/QuizSeventeen";
import QuizEighteen from "./components/QuizSecond/QuizEighteen";
import QuizNineteen from "./components/QuizSecond/QuizNineteen";
import QuizTwenty from "./components/QuizSecond/QuizTwenty";
import CompletedAll from "./components/CompletedAll/CompletedAll";


function App() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [auth,setAuth] = useLocalStorige('auth',{});
    const quiz = useSelector((state) => state.quiz);

    const login = (authData) => {
        setAuth(authData);
        navigate('/');
    };

    const register = async (authData) => {
        
        const userData = {
            firstName: authData.firstName,
            lastName: authData.lastName,
            password: bcrypt.hashSync(authData.password,salt)
        };

        users.push(userData);
        login(JSON.stringify(userData));
    };

    const logout = () => {
        setAuth("{}");
        navigate('/');
    };

    const correctAnswer = (question) => {
        dispatch(compliteQuestion());
        navigate(`/quiz/${question+1}`);
    };

    const wrongAnswer = (question) => {
        if (question === 10) {
            dispatch(wrongQuestion());
            dispatch(levelUp());
            navigate(`/completed/quiz/one`);
        }else{
            dispatch(wrongQuestion());
            navigate(`/quiz/${question+1}`);
        }
    };

    const lastQuestion = () => {
        dispatch(compliteQuestion());
        navigate(`/completed/quiz/one`);
        dispatch(levelUp());
    };

    const lastQuestionSecondLevel = (answer) => {
        if (answer === true) {
            dispatch(completeLastQuestion());
            navigate('/completed/all/levels')
        }else{
            navigate('/completed/all/levels')
        }
    };

    const tryAgain = () => {
        dispatch(startAgain());
        navigate('/quiz/1')
    };

    return (
        <div>
            <Navbar auth={auth} quiz={quiz}/>
                <QuizContext.Provider value={{correctAnswer,wrongAnswer,lastQuestion,lastQuestionSecondLevel,tryAgain,quiz}}>
                    <Routes>
                        <Route path='/' element={<HomePage />}/>
                        <Route path='/user/register' element={<Register register={register}/>}/>
                        <Route path='/user/login' element={<Login login={login}/>}/>
                        <Route path='/user/logout' element={<Logout logoutHandler={logout}/>}/>
                        <Route path='/about' element={<About />}/>
                        <Route path='/quiz/1' element={<QuizOne />}/>
                        <Route path='/quiz/2' element={<QuizTwo />}/>
                        <Route path='/quiz/3' element={<QuizThree />}/>
                        <Route path='/quiz/4' element={<QuizFour />}/>
                        <Route path='/quiz/5' element={<QuizFive />}/>
                        <Route path='/quiz/6' element={<QUizSix />}/>
                        <Route path='/quiz/7' element={<QuizSeven />}/>
                        <Route path='/quiz/8' element={<QuizEight />}/>
                        <Route path='/quiz/9' element={<QuizNine />}/>
                        <Route path='/quiz/10' element={<QuizTen />}/>
                        <Route path='/completed/quiz/one' element={<Completed />}/>
                        <Route path='/quiz/11' element={<QuizEleven />}/>
                        <Route path='/quiz/12' element={<QuizTwelve/>}/>
                        <Route path='/quiz/13' element={<QuizThirteen/>}/>
                        <Route path='/quiz/14' element={<QuizFourteen/>}/>
                        <Route path='/quiz/15' element={<QuizFifteen/>}/>
                        <Route path='/quiz/16' element={<QuizSixteen/>}/>
                        <Route path='/quiz/17' element={<QuizSeventeen/>}/>
                        <Route path='/quiz/18' element={<QuizEighteen/>}/>
                        <Route path='/quiz/19' element={<QuizNineteen/>}/>
                        <Route path='/quiz/20' element={<QuizTwenty/>}/>
                        <Route path='/completed/all/levels' element={<CompletedAll/>}/>
                    </Routes>
                </QuizContext.Provider>
        </div>
    )
};

export default App;
