import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ActiveLink } from "../ActiveLink";
import { RiDashboardFill, RiUserAddFill, RiUserFill, RiLogoutBoxFill } from "react-icons/ri";

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
                    <RiDashboardFill fontSize={20} />
                    Dashboard
                </ActiveLink>
                <ActiveLink to="/users" className={styles.link}>
                    <RiUserFill fontSize={20} />
                    Usuários
                </ActiveLink>
                <ActiveLink to="/users/create" className={styles.link}>
                    <RiUserAddFill fontSize={20}/>
                    Adicionar usuários
                </ActiveLink>
                {/* <ActiveLink to="/#" className={styles.link}>
                    <span>Icone</span>
                    Permissões
                </ActiveLink> */}
            </div>
            <button
                className={styles.signOutButton}
                onClick={signOut}
            >
                <RiLogoutBoxFill fontSize={20} />
                Sair
            </button>
        </aside>
    )
}