import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import styles from './Quiz.module.css';

const QuizFourteen = () => {
    
    const {correctAnswer,wrongAnswer} = useContext(QuizContext);

    return(
        <div className={styles.background}>
            <div className={styles.question}>
                Who can hold their breath longer?
            </div>
            <button className={styles['answer-one']} onClick={() => correctAnswer(14)}>sloth</button>
            <button className={styles['answer-two']} onClick={() => wrongAnswer(14)}>dolphin</button>

        </div>
    )
};

export default QuizFourteen;