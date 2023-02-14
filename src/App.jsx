import { HashRouter, Routes, Route } from "react-router-dom"
import { UserProvider } from "./context/userData"
//styles
import "./styles/Login.css"
import "./styles/MainLayout.css"
import "./styles/Menu.css"
import "./styles/TopBar.css"
import "./styles/Clientes.css"

import "./styles/Form.css"
import "./styles/Busqueda.css"
import "./styles/Modal.css"
import "./styles/Tabla.css"
// import "./styles/Inventario.css"
import "./styles/Venta.css"

//components
import MainLayout from "./pages/MainLayout"
import { Login } from "./pages/Login"
import { Clientes } from "./pages/Clientes"
import { ClienteData } from "./pages/ClienteData"
// import { Inventario } from "./pages/Inventario"
import { Venta } from "./pages/Venta"
import { Precios } from "./pages/Precios"


function App() {
return (
    <HashRouter>
      <UserProvider>
      <h1></h1>
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
            path="/cliente"
            element={
              <MainLayout>
                <ClienteData/>
              </MainLayout>
            }
          />
          <Route
            path="/facturas"
            element={
              <MainLayout>
                <h1>hola mundo</h1>
              </MainLayout>
            }
          />
          <Route
            path="/venta"
            element={
              <MainLayout>
                <Venta/>
              </MainLayout>
            }
          />
          <Route
            path="/precios"
            element={
              <MainLayout>
                <Precios/>
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
