import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.text}>Welcome to our Quiz. This is a little webstay
            to test your knowledge of the world. We have collected various interesting facts
            that are little known to most people. There are 10 questions, so don't hesitate
            and test your knowledge,you might learn something new. Good luck and enjoy the game.</h1>
        </div>
    )
};

export default HomePage;