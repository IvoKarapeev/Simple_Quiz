import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import styles from './QuizOne.module.css';

const QuizOne = () => {

    const {correctAnswer,wrongAnswer} = useContext(QuizContext);

    return(
        <div className={styles.background}>
            <div className={styles['question-one']}>
                This is the only food that doesn't spoil. What is this?
            </div>
            <button className={styles['btn-one']} onClick={wrongAnswer}>Oil</button>
            <button className={styles['btn-two']} onClick={wrongAnswer}>Chocolate</button>
            <button className={styles['btn-three']} onClick={correctAnswer}>Honey</button>
            <button className={styles['btn-four']} onClick={wrongAnswer}>Strawberry jam</button>
        </div>
    )
};

export default QuizOne;