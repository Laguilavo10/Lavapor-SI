import { HashRouter, Routes, Route } from "react-router-dom"
import { UserProvider } from "./context/userData"
import { Login } from "./pages/Login"
import MainLayout from "./pages/MainLayout"

//styles
import "./styles/Login.css"
import "./styles/MainLayout.css"
import "./styles/Menu.css"

function App() {
  return (
    <HashRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<MainLayout />} />
        </Routes>
      </UserProvider>
    </HashRouter>
  )
}

export default App
