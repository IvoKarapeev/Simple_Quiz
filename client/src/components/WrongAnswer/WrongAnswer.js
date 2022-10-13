import styles from './WrongAnswer.module.css';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { wrongQuestion } from '../../features/quiz/quizSlice';
import { useEffect } from 'react';

const WrongAnswer = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(wrongQuestion());
    },[]);

    return (
        <div className={styles.background}>
            <div className={styles.text}>That was the wrong answer, but don't worry. You can still succeed, try again!</div>
            <button className={styles["btn-back"]}><Link to='/'>Go Back</Link></button>
        </div>
    )
};

export default WrongAnswer;