import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export function Sidebar() {
    return (
        <aside className={styles.container}>
            <div className={styles.logo}>
                <h1>Users permission</h1>
            </div>
            <div className={styles.linkSession}>
                <Link to="/dashboard" className={`${styles.link} ${styles.active}`}>
                    <span>Icone</span>
                    Dashboard
                </Link>
                <Link to="/users" className={styles.link}>
                    <span>Icone</span>
                    Usuários
                </Link>
                <Link to="/dashboard" className={styles.link}>
                    <span>Icone</span>
                    Adicionar usuários
                </Link>
                <Link to="/dashboard" className={styles.link}>
                    <span>Icone</span>
                    Permissões
                </Link>
            </div>
            <button className={styles.signOutButton}>
                    Logout
                </button>
        </aside>
    )
}