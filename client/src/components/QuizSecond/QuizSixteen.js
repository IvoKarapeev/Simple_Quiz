import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import styles from './Quiz.module.css';

const QuizSixteen = () => {
    
    const {correctAnswer,wrongAnswer} = useContext(QuizContext);

    return(
        <div className={styles.background}>
            <div className={styles.question}>
                Where the shadows are darker?
            </div>
            <button className={styles['answer-one']} onClick={() => correctAnswer(16)}>moon</button>
            <button className={styles['answer-two']} onClick={() => wrongAnswer(16)}>earth</button>

        </div>
    )
};

export default QuizSixteen;