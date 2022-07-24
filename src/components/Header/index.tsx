import styles from "./styles.module.css";

export function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.greetings}>
                <h1>Seja bem vindo, Gustavo Soares</h1>
            </div>
            <div className={styles.notificationBar}>
                <div>caixa de notificação</div>
                <div className={styles.userProfile}>
                    <img src="https://github.com/zankei1.png" alt="" />
                    <span>Gustavo Soares</span>
                </div>
            </div>
        </header>
    )
}