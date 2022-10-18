import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import styles from './QuizOne.module.css';

const QUizSix = () => {

    const {correctAnswer,wrongAnswer} = useContext(QuizContext);

    return(
        <div className={styles.background}>
            <div className={styles['question-one']}>
                What percentage of the world's currency is digital.?
            </div>
            <button className={styles['btn-one']} onClick={() => correctAnswer(6)}>92%</button>
            <button className={styles['btn-two']} onClick={() => wrongAnswer(6)}>50%</button>
            <button className={styles['btn-three']} onClick={() => wrongAnswer(6)}>57%</button>
            <button className={styles['btn-four']} onClick={() => wrongAnswer(6)}>0%</button>
        </div>
    )
};

export default QUizSix;