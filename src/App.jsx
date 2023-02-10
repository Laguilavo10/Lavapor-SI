import { HashRouter, Routes, Route } from "react-router-dom"
import { UserProvider } from "./context/userData"
import { Clientes } from "./pages/Clientes"
import { Login } from "./pages/Login"
import MainLayout from "./pages/MainLayout"

//styles
import "./styles/Login.css"
import "./styles/MainLayout.css"
import "./styles/Menu.css"
import "./styles/TopBar.css"
import "./styles/Form.css"
import "./styles/Busqueda.css"
import "./styles/Modal.css"
import "./styles/Tabla.css"

function App() {
  return (
    <HashRouter>
      <UserProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <MainLayout>
                <h1>hola mundo</h1>
              </MainLayout>
            }
          />
          <Route
            path="/clientes"
            element={
              <MainLayout>
                <Clientes />
              </MainLayout>
            }
          />
          <Route
            path="/inventario"
            element={
              <MainLayout>
                <h1>inventario</h1>
              </MainLayout>
            }
          />
          <Route
            path="/ventas"
            element={
              <MainLayout>
                <h1>ventas</h1>
              </MainLayout>
            }
          />
          <Route
            path="/facturas"
            element={
              <MainLayout>
                <h1>facturas</h1>
              </MainLayout>
            }
          />
          <Route
            path="/gastos"
            element={
              <MainLayout>
                <h1>gastos</h1>
              </MainLayout>
            }
          />
          <Route
            path="*"
            element={
              <MainLayout>
                <h1>Not Found</h1>
              </MainLayout>
            }
          />
        </Routes>
      </UserProvider>
    </HashRouter>
  )
}

export default App
