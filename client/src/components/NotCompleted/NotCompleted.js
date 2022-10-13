import styles from './NotCompleted.module.css';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NotCompleted = () => {

    const quiz = useSelector((state) => state.quiz);
    const score = quiz.score

    return(
        <div className={styles.background}>
            <div className={styles.text}>Your score is {score}, you didnt answer all questions but dont give up and try again!</div>
            <button className={styles["btn-back"]}><Link to={'/'}>Go Back</Link></button>
        </div>
    )

};

export default NotCompleted;