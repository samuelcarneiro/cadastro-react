import { useEffect, useState } from "react";
import api from "../../services/api";

function ListarUsuarios() {
  const [allUsers, setAllUsers] = useState();

  // É chamado toda vez que a tela carrega
  useEffect(() => {
    async function loadUsers() {
      // Pegando o Token salvo no LocalStorage
      const token = localStorage.getItem("token");

      const {
        data: { users },
      } = await api.get("/listar-usuarios", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllUsers(users);
    }
    loadUsers();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-8 border border-gray-300 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6
       text-center text-gray-800">Lista de Usuários</h2>
      {/* MAP */}
      <ul className="space-y-2">
        {allUsers && allUsers.map((user) => (
          <li key={user.id} className="bg-gray-100 p-4 rounded-md">
            <p className="font-semibold">Id: {user.id}</p>
            <p className="font-semibold">Nome: {user.name}</p>
            <p className="font-semibold">Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListarUsuarios;
