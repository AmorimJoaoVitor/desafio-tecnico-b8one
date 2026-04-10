import { HashRouter, Routes, Route, Navigate } from "react-router-dom"
import { Ofertas } from "./pages/Ofertas"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/ofertas" />} />
        <Route path="/ofertas" element={<Ofertas />} />
      </Routes>
    </HashRouter>
  )
}

export default App