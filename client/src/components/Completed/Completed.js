import { Link } from 'react-router-dom';

import styles from './Completed.module.css';

const Completed = () => {

    return(
        <div className={styles.background}>
            <div className={styles.text}>Congratulations. 
            You are one of the few people capable of going through these questions of the first level. 
            Feel proud of your knowledge and as a reward here is an interesting fact: 
            Sunsets only exist because Earth’s atmosphere acts as a prism for light. In scientific terms, 
            it’s called “scattering”. Are you ready for the next level? 
            </div>

            <button className={styles["btn-next"]}><Link to='/quiz/11'>Next Level</Link></button>
        </div>
)

};

export default Completed;