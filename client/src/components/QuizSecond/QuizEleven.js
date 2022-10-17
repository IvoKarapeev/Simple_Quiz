import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../../context/QuizContext';
import styles from './Quiz.module.css';

const QuizEleven = ({completedHandler}) => {
    
    const navigate = useNavigate();
    const completed = completedHandler();
    
    const {correctAnswer,wrongAnswer} = useContext(QuizContext);

    useEffect(() => {
        if (completed === false) {
            navigate('/not/completed');
        }
    },[]);

    return(
        <div className={styles.background}>
            <div className={styles.question}>
                How many kg can a human hair hold?
            </div>
            <button className={styles['answer-one']} onClick={() => correctAnswer(11)}>100 kg</button>
            <button className={styles['answer-two']} onClick={wrongAnswer}>5 kg</button>

        </div>
    )
};

export default QuizEleven;