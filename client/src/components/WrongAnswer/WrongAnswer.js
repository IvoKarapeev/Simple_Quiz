import styles from './WrongAnswer.module.css';

import { Link } from 'react-router-dom';

const WrongAnswer = () => {
    return (
        <div className={styles.background}>
            <div className={styles.text}>That was the wrong answer, but don't worry. You can still succeed, try again!</div>
            <button className={styles["btn-back"]}><Link to='/'>Go Back</Link></button>
        </div>
    )
};

export default WrongAnswer;