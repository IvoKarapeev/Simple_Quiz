import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import styles from './QuizOne.module.css';

const QuizEight = () => {

    const {correctAnswer,wrongAnswer} = useContext(QuizContext);

    return(
        <div className={styles.background}>
            <div className={styles['question-one']}>
                Which of the following scientists does not have a chemical element named after him?
            </div>
            <button className={styles['btn-one']} onClick={() => wrongAnswer(8)}>Albert Einstein</button>
            <button className={styles['btn-two']} onClick={() => wrongAnswer(8)}>Niels Bohr</button>
            <button className={styles['btn-three']} onClick={() => correctAnswer(8)}>Isaac Newton</button>
            <button className={styles['btn-four']} onClick={() => wrongAnswer(8)}>Enrico Fermi</button>
        </div>
    )
};

export default QuizEight;