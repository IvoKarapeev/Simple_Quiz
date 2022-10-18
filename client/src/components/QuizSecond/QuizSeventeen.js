import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import styles from './Quiz.module.css';

const QuizSeventeen = () => {
    
    const {correctAnswer,wrongAnswer} = useContext(QuizContext);

    return(
        <div className={styles.background}>
            <div className={styles.question}>
                Why NASA uses a countdown?
            </div>
            <button className={styles['answer-one']} onClick={() => correctAnswer(17)}>Because of the sci-fi films</button>
            <button className={styles['answer-two']} onClick={() => wrongAnswer(17)}>To alert the team</button>

        </div>
    )
};

export default QuizSeventeen;