import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import styles from "./styles.module.css";

export function Dashboard() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.contentContainer}>
                <Header />
                <div className={styles.graphsContainer}>
                    <div className={styles.highlightedGraph}>

                    </div>
                    <div className={styles.graphs}>
                        <div className={styles.graph}>
                        </div>
                        
                        <div className={styles.graph}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}