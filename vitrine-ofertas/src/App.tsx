import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Ofertas } from "./pages/Ofertas"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/ofertas" />} />
        <Route path="/ofertas" element={<Ofertas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App