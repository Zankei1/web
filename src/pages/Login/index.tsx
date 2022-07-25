import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "./styles.module.css";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const { signIn } = useContext(AuthContext);

    async function handleFormSubmit(event: FormEvent) {
        event.preventDefault();
        await signIn(email, password);
    }

    
    return (
        <div className={styles.container}>
            <form className={styles.formContainer}>
                <header className={styles.formHeader}>
                    <h1>Login</h1>
                </header>
                <div className={styles.inputContainer}>
                    <label>E-Mail</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </div>
                <button 
                    type="submit" 
                    className={styles.signInButton}
                    onClick={handleFormSubmit}
                >
                    Entrar
                </button>
            </form>
        </div>
    );
}