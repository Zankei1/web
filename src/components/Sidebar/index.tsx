import styles from "./styles.module.css";

export function Sidebar() {
    return (
        <aside className={styles.container}>
            <div className={styles.logo}>
                <h1>Users permission</h1>
            </div>
            <div className={styles.linkSession}>
                <a href="" className={`${styles.link} ${styles.active}`}>
                    <span>Icone</span>
                    Dashboard
                </a>
                <a href="" className={styles.link}>
                    <span>Icone</span>
                    Usuários
                </a>
                <a href="" className={styles.link}>
                    <span>Icone</span>
                    Adicionar usuários
                </a>
                <a href="" className={styles.link}>
                    <span>Icone</span>
                    Permissões
                </a>
            </div>
            <button className={styles.signOutButton}>
                    Logout
                </button>
        </aside>
    )
}