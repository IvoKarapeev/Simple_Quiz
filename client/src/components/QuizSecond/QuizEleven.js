import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import styles from './Quiz.module.css';

const QuizEleven = () => {
    
    const {correctAnswer,wrongAnswer} = useContext(QuizContext);

    return(
        <div className={styles.background}>
            <div className={styles.question}>
                How many kg can a human hair hold?
            </div>
            <button className={styles['answer-one']} onClick={() => correctAnswer(11)}>100 kg</button>
            <button className={styles['answer-two']} onClick={() => wrongAnswer(11)}>5 kg</button>

        </div>
    )
};

export default QuizEleven;