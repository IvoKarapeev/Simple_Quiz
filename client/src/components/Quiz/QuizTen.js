import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import styles from './QuizOne.module.css';

const QuizTen = () => {

    const {lastQuestion,wrongAnswer} = useContext(QuizContext);

    return(
        <div className={styles.background}>
            <div className={styles['question-one']}>
                Which is world’s most populous country?
            </div>
            <button className={styles['btn-one']} onClick={() => lastQuestion()}>China</button>
            <button className={styles['btn-two']} onClick={() => wrongAnswer(10)}>Russia</button>
            <button className={styles['btn-three']} onClick={() => wrongAnswer(10)}>America</button>
            <button className={styles['btn-four']} onClick={() => wrongAnswer(10)}>South Korea</button>
        </div>
    )
};

export default QuizTen;