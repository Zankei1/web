import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

type User = {
    name: string;
    email: string;
}

interface AuthContextProps {
    user: User;
    signIn: (name: string, password: string) => Promise<void>;
    signOut: () => void;
}

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<User>();
    const history = useNavigate();

    const signOut = useCallback(() => {
        localStorage.removeItem('usersPermission.token');
        localStorage.removeItem('usersPermission.refreshToken');
        history("/");
    }, []);

    const signIn = useCallback(async (email: string, password: string) => {
        try {
            const response = await api.post('sessions', {
                email,
                password
            });

            const { user, token, refresh_token: RefreshToken } = response.data;


            localStorage.setItem('usersPermission.token', token);
            localStorage.setItem('usersPermission.refreshToken', RefreshToken);

            setUser({
                name: user.name,
                email,
            });

            history('/dashboard');

        } catch {
            console.log('Erro no login!');
        }
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('usersPermission.token');

        if (token) {
            api.get("users/info")
                .then(response => {
                    const { name, email, created_at: createdAt, supervisor } = response.data;
                    setUser({
                        name,
                        email
                    })
                })
                .catch(() => {
                    console.log("Erro");
                })
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}