import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import ListarUsuarios from './pages/Lista';

function App() {
  return (
    <BrowserRouter>
    <header className="bg-gray-700 p-4 text-white">
      <h1 className="text-gray-100 font-bold text-center text-2xl">Sistema de Cadastro de Usuários</h1>
    </header>
      <Routes>
        {/* Rota principal */}
        <Route path="/" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listar-usuarios" element={<ListarUsuarios />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;