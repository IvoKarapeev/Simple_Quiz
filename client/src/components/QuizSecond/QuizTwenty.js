import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import styles from './Quiz.module.css';

const QuizTwenty = () => {
    
    const {lastQuestionSecondLevel} = useContext(QuizContext);

    return(
        <div className={styles.background}>
            <div className={styles.question}>
                Which is wider?
            </div>
            <button className={styles['answer-one']} onClick={() => lastQuestionSecondLevel(false)}>Moon</button>
            <button className={styles['answer-two']} onClick={() => lastQuestionSecondLevel(true)}>Australia</button>

        </div>
    )
};

export default QuizTwenty;