import styles from './Login.module.css';
import users from '../../users';

const Login = ({login}) => {

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const firstName = formData.get('fname');
        const password = formData.get('password');

        let authData = {
            firstName,
            password
        };

        for (const user of users) {
            if (user.firstName === authData.firstName) {
                if (user.password === authData.password) {
                    authData.lastName = user.lastName;
                    login(JSON.stringify(authData));
                }
            }
        };

    }

    return (
        <form onSubmit={onSubmit} className={styles["form-container"]}>
            <div className={styles.login}>
                <label htmlFor="fname">First name:</label>
                <br />
                <input type="text" id="fname" name="fname"/>
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

export default Login;