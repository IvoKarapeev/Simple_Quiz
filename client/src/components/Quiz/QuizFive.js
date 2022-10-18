import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import styles from './QuizOne.module.css';

const QuizFive = () => {

    const {correctAnswer,wrongAnswer} = useContext(QuizContext);

    return(
        <div className={styles.background}>
            <div className={styles['question-one']}>
                When Niagara Falls freezes over?
            </div>
            <button className={styles['btn-one']} onClick={() => wrongAnswer(5)}>September</button>
            <button className={styles['btn-two']} onClick={() => wrongAnswer(5)}>November</button>
            <button className={styles['btn-three']} onClick={() => wrongAnswer(5)}>December</button>
            <button className={styles['btn-four']} onClick={() => correctAnswer(5)}>It doesn't freeze</button>
        </div>
    )
};

export default QuizFive;