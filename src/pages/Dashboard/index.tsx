import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

import styles from "./styles.module.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const options: ApexOptions = {
    chart: {
        id: 'basic-bar',
        toolbar: {
            show: false,
        }
    },
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    },
    tooltip: {
        enabled: false,
    },
    series: [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]
}

export function Dashboard() {
    const history = useNavigate();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const token = localStorage.getItem('usersPermission.token');
        if (!token) {
            history("/");
        }
    }, [])

    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.contentContainer}>
                <Header userName={user?.name} />
                <div className={styles.graphsContainer}>
                    <div className={styles.highlightedGraph}>
                        <div className={styles.graphHeader}>
                            <h1>Usuários cadastrados nas ultimas semanas</h1>
                        </div>
                        <Chart options={options} series={options.series} type="area" height="80%" />
                    </div>
                    <div className={styles.graphs}>
                        <div className={styles.graph}>
                            <Chart options={options} series={options.series} type="area" height="100%" />
                        </div>
                        <div className={styles.graph}>
                            <Chart options={options} series={options.series} type="area" height="100%" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}