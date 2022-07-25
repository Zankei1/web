import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateUser } from "./pages/CreateUser";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Users } from "./pages/Users";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/create" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  )
}