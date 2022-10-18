import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import styles from './Quiz.module.css';

const QuizNineteen = () => {
    
    const {correctAnswer,wrongAnswer} = useContext(QuizContext);

    return(
        <div className={styles.background}>
            <div className={styles.question}>
                Exactly how long does it take to build the Eiffel Tower??
            </div>
            <button className={styles['answer-one']} onClick={() => correctAnswer(19)}>2 years, 2 months, and 5 days</button>
            <button className={styles['answer-two']} onClick={() => wrongAnswer(19)}>4 years, 1 months, and 2 days</button>

        </div>
    )
};

export default QuizNineteen;