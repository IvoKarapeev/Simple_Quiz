import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import Logout from "./components/Logout/Logout";
import QuizOne from "./components/Quiz/QuizOne";
import WrongAnswer from "./components/WrongAnswer/WrongAnswer";
import bcrypt from 'bcryptjs';
import { Routes,Route, useNavigate } from "react-router-dom";
import useLocalStorige from "./hooks/useLocalStorige";
import { useDispatch, useSelector } from 'react-redux';
import { compliteQuestion,levelUp } from "./features/quiz/quizSlice";
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
import NotCompleted from "./components/NotCompleted/NotCompleted";


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

    const lastQuestion = () => {
        let score = quiz.score;
            if (score === 9) {
                dispatch(compliteQuestion());
                navigate(`/completed/quiz/one`);
                dispatch(levelUp());
            }
    };

    const completedHandler = () => {
        if (quiz.score === 10) {
            return true;
        }else{
            return false;
        }
    };

    return (
        <div>
            <Navbar auth={auth} quiz={quiz}/>
                <QuizContext.Provider value={{correctAnswer,wrongAnswer,lastQuestion}}>
                    <Routes>
                        <Route path='/' element={<HomePage />}/>
                        <Route path='/user/register' element={<Register register={register}/>}/>
                        <Route path='/user/login' element={<Login login={login}/>}/>
                        <Route path='/user/logout' element={<Logout logoutHandler={logout}/>}/>
                        <Route path='/about' element={<About />}/>
                        <Route path='/wrong' element={<WrongAnswer />}/>
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
                        <Route path='/completed/quiz' element={<Completed completedHandler={completedHandler}/>}/>
                        <Route path='/not/completed/one' element={<NotCompleted />}/>
                    </Routes>
                </QuizContext.Provider>
        </div>
    )
};

export default App;
