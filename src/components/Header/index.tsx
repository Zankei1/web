import styles from "./styles.module.css";

interface HeaderProps {
    userName: string;
}


export function Header({ userName }: HeaderProps) {    
    return (
        <header className={styles.container}>
            <div className={styles.greetings}>
                <h1>Seja bem vindo, { userName }</h1>
            </div>
            <div className={styles.notificationBar}>
                <div>caixa de notificação</div>
                <div className={styles.userProfile}>
                    <img src="https://github.com/zankei1.png" alt="" />
                    <span>{ userName }</span>
                </div>
            </div>
        </header>
    )
}