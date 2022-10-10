import styles from './Register.module.css';

const Register = () => {
  return (
    <form className={styles["form-container"]}>
        <div className={styles.register}>
            <label htmlFor="fname">First name:</label>
            <br />
            <input type="text" id="fname" name="fname"/>
            <br />
            <label htmlFor="lname">Last name:</label>
            <br />
            <input type="text" id="lname" name="lname"/>
            <br />
            <label htmlFor="password">Password:</label>
            <br />
            <input type="password" id="password" name="password"/>
            <br />
            <br />
            <input className={styles["form-btn-submit"]} type="submit" defaultValue="Submit" />
        </div>
    </form>
  );
};

export default Register;
