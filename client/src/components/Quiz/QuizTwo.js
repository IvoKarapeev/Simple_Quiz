import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import styles from './QuizOne.module.css';

const QuizTwo = () => {

    const {correctAnswer,wrongAnswer} = useContext(QuizContext);

    return(
        <div className={styles.background}>
            <div className={styles['question-one']}>
                What is the strongest muscle in the body?
            </div>
            <button className={styles['btn-one']} onClick={() => correctAnswer(2)}>Tongue</button>
            <button className={styles['btn-two']} onClick={() => wrongAnswer(2)}>Chest</button>
            <button className={styles['btn-three']} onClick={() => wrongAnswer(2)}>Biceps</button>
            <button className={styles['btn-four']} onClick={() => wrongAnswer(2)}>Thigh</button>
        </div>
    )
};

export default QuizTwo;