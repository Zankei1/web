import { useContext } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "./styles.module.css";

export function Users() {
    const { user } = useContext(AuthContext);
    
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.contentContainer}>
                <Header userName={user.name} />
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
                            <tr>
                                <td>Gustavo</td>
                                <td>Gustavo@email.com</td>
                                <td>Funcionario</td>
                                <td>Elétrica</td>
                            </tr>
                            <tr>
                                <td>Gustavo</td>
                                <td>Gustavo@email.com</td>
                                <td>Funcionario</td>
                                <td>Elétrica</td>
                            </tr>
                            <tr>
                                <td>Gustavo</td>
                                <td>Gustavo@email.com</td>
                                <td>Funcionario</td>
                                <td>Elétrica, ADM, TI</td>
                            </tr>
                            <tr>
                                <td>Gustavo</td>
                                <td>Gustavo@email.com</td>
                                <td>Funcionario</td>
                                <td>Elétrica</td>
                            </tr>
                            <tr>
                                <td>Gustavo</td>
                                <td>Gustavo@email.com</td>
                                <td>Funcionario</td>
                                <td>Elétrica</td>
                            </tr>
                            <tr>
                                <td>Gustavo</td>
                                <td>Gustavo@email.com</td>
                                <td>Funcionario</td>
                                <td>Elétrica, ADM, TI</td>
                            </tr>
                            <tr>
                                <td>Gustavo</td>
                                <td>Gustavo@email.com</td>
                                <td>Funcionario</td>
                                <td>Elétrica, ADM, TI</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}