import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import styles from './Quiz.module.css';

const QuizFifteen = () => {
    
    const {correctAnswer,wrongAnswer} = useContext(QuizContext);

    return(
        <div className={styles.background}>
            <div className={styles.question}>
                How many hearts does octopuses have?
            </div>
            <button className={styles['answer-one']} onClick={() => wrongAnswer(15)}>4</button>
            <button className={styles['answer-two']} onClick={() => correctAnswer(15)}>3</button>

        </div>
    )
};

export default QuizFifteen;