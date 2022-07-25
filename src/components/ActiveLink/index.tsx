import { ReactNode } from "react";
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";

import styles from "./styles.module.css";

console.log(styles);

interface ActiveLinkProps extends LinkProps {
    to: string;
    children: ReactNode;
}

export function ActiveLink({ to, children, ...rest}: ActiveLinkProps) {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            {...rest}
            to={to}
            className={`${styles.link} ${match ? styles.active : ''}`}
        >
            {children}
        </Link>
    );
}