import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import styles from "./styles.module.css";

export function CreateUser() {
    const { user } = useContext(AuthContext);
    const history = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleFormSubmit(event: FormEvent) {
        event.preventDefault();
        
        const data = {
            email,
            name,
            password
        }

        try {
            await api.post("users", data);
            history("/users");
        } catch {
            console.log("Erro ao criar usuário");
        }
    }

    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.contentContainer}>
                <Header userName={user?.name} />
                <form className={styles.form}>
                    <header className={styles.formHeader}>
                        <h1>Criar novo usuário</h1>
                    </header>
                    <div className={styles.inputField}>
                        <label>Nome</label>
                        <input 
                            type="text" 
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />
                    </div>
                    <div className={styles.inputField}>
                        <label>Email</label>
                        <input 
                            type="email" 
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                    </div>
                    <div className={styles.inputField}>
                        <label>Senha</label>
                        <input 
                            type="password" 
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                    </div>
                    <div className={styles.submitButtonContainer}>
                        <button
                            type="submit"
                            onClick={handleFormSubmit}
                        >
                            Criar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}