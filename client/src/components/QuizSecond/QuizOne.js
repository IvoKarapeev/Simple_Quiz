import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Quiz.module.css';

const QuestionOne = ({completedHandler}) => {

    const navigate = useNavigate();
    const completed = completedHandler();
 

    useEffect(() => {
        if (completed === false) {
            navigate('/not/completed');
        }
    },[]);

    return(
        <div className={styles.background}>
            <div className={styles.question}>
                How many kg can a human hair hold?
            </div>
            <button className={styles['answer-one']}>100 kg</button>
            <button className={styles['answer-two']}>5 kg</button>

        </div>
    )
};

export default QuestionOne;