import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import styles from './Quiz.module.css';

const QuizTwelve = () => {
    
    const {correctAnswer,wrongAnswer} = useContext(QuizContext);

    return(
        <div className={styles.background}>
            <div className={styles.question}>
                Is it physically impossible for pigs to look up into the sky?
            </div>
            <button className={styles['answer-one']} onClick={() => wrongAnswer(12)}>No</button>
            <button className={styles['answer-two']} onClick={() => correctAnswer(12)}>Yes</button>

        </div>
    )
};

export default QuizTwelve;