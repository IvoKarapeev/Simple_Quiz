import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import styles from './QuizOne.module.css';

const QuizSeven = () => {

    const {correctAnswer,wrongAnswer} = useContext(QuizContext);

    return(
        <div className={styles.background}>
            <div className={styles['question-one']}>
                The green computer code that is featured in the movie The Matrix at the beginning of the movie is actually a scan of:?
            </div>
            <button className={styles['btn-one']} onClick={wrongAnswer}>Chapters from the Koran</button>
            <button className={styles['btn-two']} onClick={wrongAnswer}>Fines for speeding</button>
            <button className={styles['btn-three']} onClick={() => correctAnswer(7)}>Sushi recipes</button>
            <button className={styles['btn-four']} onClick={wrongAnswer}>Washing machine instructions</button>
        </div>
    )
};

export default QuizSeven;