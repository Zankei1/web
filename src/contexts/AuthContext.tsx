import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

type User = {
    name: string;
    email: string;
}

interface AuthContextProps {
    user: User;
    signIn: (name: string, password: string) => Promise<void>;
}

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<User>();
    const history = useNavigate();

    async function signIn(email: string, password: string) {
        try {
            const response = await api.post("sessions", {
                email,
                password
            });            

            const { user } = response.data;

            setUser({
                name: user.name,
                email
            })

            history("/dashboard", { state: user });
        } catch {
            console.log("Erro");
        }
    }
    
    return (
        <AuthContext.Provider value={{ user, signIn }}>
            { children }
        </AuthContext.Provider>
    )
}