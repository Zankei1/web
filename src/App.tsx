import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { CreateUser } from "./pages/CreateUser";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Users } from "./pages/Users";
import { queryClient } from "./services/reactQuery";

export function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/create" element={<CreateUser />} />
          </Routes>
        </QueryClientProvider>
      </AuthContextProvider>
    </BrowserRouter>
  )
}