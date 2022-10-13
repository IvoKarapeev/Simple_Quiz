import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import styles from './QuizOne.module.css';

const QuizThree = () => {

    const {correctAnswer,wrongAnswer} = useContext(QuizContext);

    return(
        <div className={styles.background}>
            <div className={styles['question-one']}>
                How long does it take for a pineapple to grow?
            </div>
            <button className={styles['btn-one']} onClick={wrongAnswer}>1 month</button>
            <button className={styles['btn-two']} onClick={wrongAnswer}>1 year and a half</button>
            <button className={styles['btn-three']} onClick={wrongAnswer}>6 months</button>
            <button className={styles['btn-four']} onClick={() => correctAnswer(3)}>2 years</button>
        </div>
    )
};

export default QuizThree;