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
import "./styles/GreenRedBtn.css"
import "./styles/Venta.css"
import "./styles/Factura.css"
import "./styles/FacturaData.css"

//components
import MainLayout from "./pages/MainLayout"
import { Login } from "./pages/Login"
import { Clientes } from "./pages/Clientes"
import { ClienteData } from "./pages/ClienteData"
// import { Inventario } from "./pages/Inventario"
import { Venta } from "./pages/Venta"
import { Precios } from "./pages/Precios"
import { Facturas } from "./pages/Facturas"


function App() {
return (
    <HashRouter>
      <UserProvider>
      <h2></h2>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <MainLayout>
                <h2>hola mundo</h2>
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
                <Facturas/>
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
                <h2>Not Found</h2>
              </MainLayout>
            }
          />
        </Routes>
      </UserProvider>
    </HashRouter>
  )
}

export default App
