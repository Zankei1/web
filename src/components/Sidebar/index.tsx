import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ActiveLink } from "../ActiveLink";
import styles from "./styles.module.css";

export function Sidebar() {
    
    const { user } = useContext(AuthContext);
    
    return (
        <aside className={styles.container}>
            <div className={styles.logo}>
                <h1>Users permission</h1>
            </div>
            <div className={styles.linkSession}>
                <ActiveLink to="/dashboard" state={user} className={styles.link}>
                    <span>Icone</span>
                    Dashboard
                </ActiveLink>
                <ActiveLink to="/users" state={user} className={styles.link}>
                    <span>Icone</span>
                    Usuários
                </ActiveLink>
                <ActiveLink to="/users/create" state={user} className={styles.link}>
                    <span>Icone</span>
                    Adicionar usuários
                </ActiveLink>
                <ActiveLink to="/teste" state={user} className={styles.link}>
                    <span>Icone</span>
                    Permissões
                </ActiveLink>
            </div>
            <button className={styles.signOutButton}>
                    Logout
                </button>
        </aside>
    )
}