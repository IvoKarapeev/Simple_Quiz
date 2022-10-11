import styles from './Register.module.css';

const Register = ({
    register
}) => {

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const firstName = formData.get('fname');
        const lastName = formData.get('lname');
        const password = formData.get('password');

        if (firstName && lastName && password) {


        const authData = {
            firstName,
            lastName,
            password
        };

        register(authData);
        }
    }
    
    return (
        <form className={styles["form-container"]} onSubmit={onSubmit}>
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
