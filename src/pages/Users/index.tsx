import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import styles from "./styles.module.css";

export function Users() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.contentContainer}>
                <Header />
                <div className={styles.tableContainer}>
                    <div className={styles.tableTitle}>
                        <h1>Usuários</h1>
                        <button>Adicionar novo usuário</button>
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