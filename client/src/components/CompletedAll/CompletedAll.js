import styles from './CompletedALL.module.css'
import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import { Link } from 'react-router-dom';

const CompletedAll = () => {

    const {quiz,tryAgain} = useContext(QuizContext);

    return(
        <div className={styles.background}>
            <div className={styles.congrats}>
                Congratulations, you passed all the questions. 
                Your score is {quiz.score}/20.I hope you are happy with your result, if not you can try again. 
                The most important thing is that you tried! 
            </div>
            <button className={styles["btn-back"]}><Link to='/'>Go Back</Link></button>
            <button className={styles["btn-try-again"]} onClick={tryAgain}>Try again</button>
        </div>
    )
};

export default CompletedAll;