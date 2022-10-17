import styles from './About.module.css';

const About = () => {
    return(
        <div className={styles.container}>
            <div className={styles["text-container"]}>
            Welcome to our little website. Here you can test your knowledge by passing 10 interesting questions 
            about the world by level,they are 2 levels for now but if you can pass even the 
            first level its still very impresive! 
            Each of the questions is a fact little known 
            to most people and if you can get through all questions with a score of 
            20/20 it will be amazing. Good luck and enjoy the game!
            </div>
        </div>
    )
};

export default About;