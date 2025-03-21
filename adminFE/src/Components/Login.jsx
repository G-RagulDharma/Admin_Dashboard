import react from 'react'
import styles from './login.module.css';

const Login = () => {
    return (
        <div className={styles.Container}>
            <form className={styles.form_container}>
                <h3 className={styles.login_heading}>LOGIN</h3>
                <input type='email' placeholder='Email' className={styles.email}></input>
                <input type="password" placeholder='Password' className={styles.password}></input>
                <input type="submit" value="Submit" className={styles.btn}></input>
            </form>
        </div>
    );
};
export default Login;