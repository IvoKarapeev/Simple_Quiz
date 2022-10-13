import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import styles from './QuizOne.module.css';

const QuizNine = () => {

    const {correctAnswer,wrongAnswer} = useContext(QuizContext);

    return(
        <div className={styles.background}>
            <div className={styles['question-one']}>
                The most-visited country on the planet, according to figures from the UNWTO in 2018 is?
            </div>
            <button className={styles['btn-one']} onClick={wrongAnswer}>America</button>
            <button className={styles['btn-two']} onClick={wrongAnswer}>Greece</button>
            <button className={styles['btn-three']} onClick={wrongAnswer}>Italy</button>
            <button className={styles['btn-four']} onClick={() => correctAnswer(9)}>France</button>
        </div>
    )
};

export default QuizNine;