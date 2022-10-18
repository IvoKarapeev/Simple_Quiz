import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import styles from './QuizOne.module.css';

const QuizFour = () => {

    const {correctAnswer,wrongAnswer} = useContext(QuizContext);

    return(
        <div className={styles.background}>
            <div className={styles['question-one']}>
                When you do a Google query, how many computers are used to find the answer ? 
            </div>
            <button className={styles['btn-one']} onClick={() => wrongAnswer(4)}>100</button>
            <button className={styles['btn-two']} onClick={() => correctAnswer(4)}>1000</button>
            <button className={styles['btn-three']} onClick={() => wrongAnswer(4)}>1</button>
            <button className={styles['btn-four']} onClick={() => wrongAnswer(4)}>675</button>
        </div>
    )
};

export default QuizFour;