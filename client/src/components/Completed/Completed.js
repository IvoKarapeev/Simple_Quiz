import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import styles from './Completed.module.css';

const Completed = ({completedHandler}) => {

    const navigate = useNavigate();
    const completed = completedHandler();
 

    useEffect(() => {
        if (completed === false) {
            navigate('/not/completed');
        }
    },[]);

    return(
        <div className={styles.background}>
            <div className={styles.text}>Congratulations. 
            You are one of the few people capable of going through these questions. 
            Feel proud of your knowledge and as a reward here is an interesting fact: 
            Sunsets only exist because Earth’s atmosphere acts as a prism for light. In scientific terms, 
            it’s called “scattering”.
            </div>

            <button className={styles["btn-home"]}><Link to='/'>Home</Link></button>
        </div>
)

};

export default Completed;