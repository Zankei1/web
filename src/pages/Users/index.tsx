import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import styles from "./styles.module.css";

type User = {
    id_user: string;
    name: string;
    email: string;
    created_at: string;
}

export function Users() {
    const { user } = useContext(AuthContext);

    const { data, isLoading, error } = useQuery(['users'], async () => {
        const { data } = await api.get<User[]>("users");

        const users = data.map((user) => {
            return {
                id: user.id_user,
                name: user.name,
                email: user.email,
                createdAt: new Date(user.created_at).toLocaleDateString("pt-BR", {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                })
            }
        })

        return users;
    }, {
        staleTime: 1000 * 60
    })

    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.contentContainer}>
                <Header userName={user?.name} />
                <div className={styles.tableContainer}>
                    <div className={styles.tableTitle}>
                        <h1>Usuários</h1>
                        <Link className={styles.createUserButton} to="/users/create">Adicionar novo usuário</Link>
                    </div>
                    <table className={styles.table}>
                        <thead className={styles.tableHeader}>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Função</th>
                                <th>Permissões</th>
                            </tr>
                        </thead>
                            <tbody className={styles.tableBody}>
                                {data?.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>Funcionario</td>
                                        <td>Elétrica</td>
                                    </tr>
                                ))}
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}