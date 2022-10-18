import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import styles from './Quiz.module.css';

const QuizThirteen = () => {
    
    const {correctAnswer,wrongAnswer} = useContext(QuizContext);

    return(
        <div className={styles.background}>
            <div className={styles.question}>
                Look at this series: 7, 10, 8, 11, 9, 12, … What number should come next?
            </div>
            <button className={styles['answer-one']} onClick={() => wrongAnswer(13)}>14</button>
            <button className={styles['answer-two']} onClick={() => correctAnswer(13)}>10</button>

        </div>
    )
};

export default QuizThirteen;