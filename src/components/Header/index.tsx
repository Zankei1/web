import styles from "./styles.module.css";

export function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.greetings}>
                <h1>Seja bem vindo, Pedro Henrique</h1>
            </div>
            <div className={styles.notificationBar}>
                <div>caixa de notificação</div>
                <div className={styles.userProfile}>
                    <img src="https://github.com/pedromm65.png" alt="" />
                    <span>Pedro Henrique</span>
                </div>
            </div>
        </header>
    )
}