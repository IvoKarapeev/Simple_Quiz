import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import styles from './Quiz.module.css';

const QuizEighteen = () => {
    
    const {correctAnswer,wrongAnswer} = useContext(QuizContext);

    return(
        <div className={styles.background}>
            <div className={styles.question}>
                The world’s largest national park is located in?
            </div>
            <button className={styles['answer-one']} onClick={() => wrongAnswer(18)}>France</button>
            <button className={styles['answer-two']} onClick={() => correctAnswer(18)}>Greenland</button>

        </div>
    )
};

export default QuizEighteen;