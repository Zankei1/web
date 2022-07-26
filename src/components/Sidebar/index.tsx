import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ActiveLink } from "../ActiveLink";
import styles from "./styles.module.css";

export function Sidebar() {

    const { signOut } = useContext(AuthContext);

    return (
        <aside className={styles.container}>
            <div className={styles.logo}>
                <h1>Users permission</h1>
            </div>
            <div className={styles.linkSession}>
                <ActiveLink to="/dashboard" className={styles.link}>
                    <span>Icone</span>
                    Dashboard
                </ActiveLink>
                <ActiveLink to="/users" className={styles.link}>
                    <span>Icone</span>
                    Usuários
                </ActiveLink>
                <ActiveLink to="/users/create" className={styles.link}>
                    <span>Icone</span>
                    Adicionar usuários
                </ActiveLink>
                <ActiveLink to="/dashboard" className={styles.link}>
                    <span>Icone</span>
                    Permissões
                </ActiveLink>
            </div>
            <button
                className={styles.signOutButton}
                onClick={signOut}
            >
                <span>Icone</span>
                Logout
            </button>
        </aside>
    )
}