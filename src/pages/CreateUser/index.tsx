import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import styles from "./styles.module.css";

export function CreateUser() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.contentContainer}>
                <Header />
                <div className={styles.formContainer}>
                    <form className={styles.form}>
                        <header>Cadastrar novo usuario</header>
                        <div className={styles.inputContainer}>
                            <div className={styles.inputField}>
                                <label>Nome</label>
                                <input type="text" />
                            </div>
                            <div className={styles.inputField}>
                                <label>Email</label>
                                <input type="email" />
                            </div>
                        </div>
                        <div className={styles.inputContainer}>
                            <div className={styles.inputField}>
                                <label>Senha</label>
                                <input type="password" />
                            </div>
                            <div className={styles.inputField}>
                                <label>Confirmar senha</label>
                                <input type="password" />
                            </div>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}