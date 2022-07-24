import styles from "./styles.module.css";

export function Login() {
    return (
        <div className={styles["container"]}>
            <form className={styles["form-container"]}>
                <header className={styles["form-header"]}>
                    <h1>Login</h1>
                </header>
                <div className={styles["input-container"]}>
                    <label>E-Mail</label>
                    <input type="email" />
                </div>
                <div className={styles["input-container"]}>
                    <label>Password</label>
                    <input type="password" />
                </div>
                <button className={styles["sign-in-button"]}>Entrar</button>
            </form>
        </div>
    );
}