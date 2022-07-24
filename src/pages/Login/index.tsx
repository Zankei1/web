import styles from "./styles.module.css";

export function Login() {
    return (
        <div className={styles.container}>
            <form className={styles.formContainer}>
                <header className={styles.formHeader}>
                    <h1>Login</h1>
                </header>
                <div className={styles.inputContainer}>
                    <label>E-Mail</label>
                    <input type="email" />
                </div>
                <div className={styles.inputContainer}>
                    <label>Password</label>
                    <input type="password" />
                </div>
                <button className={styles.signInButton}>Entrar</button>
            </form>
        </div>
    );
}