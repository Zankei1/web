import { useContext } from "react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "./styles.module.css";

export function CreateUser() {
    
    const { user } = useContext(AuthContext);
    
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.contentContainer}>
                <Header userName={user.name}/>
                <form className={styles.form}>
                    
                </form>
            </div>
        </div>
    )
}