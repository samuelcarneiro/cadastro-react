import { useRef } from "react";
import { Link } from "react-router-dom";
// Importar a API
import api from "../../services/api";

function Cadastro() {
  // Pegar as informações do formulário no front-end
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      // Acessando o post /cadastro do backend e enviando os dados
      await api.post('/cadastro', {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      alert("Usuário cadastrado com sucesso!");
    } catch (err) {
        alert("Erro ao cadastrar usuário!");
    }

    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Cadastro
      </h2>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          placeholder="Nome"
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          ref={emailRef}
          placeholder="E-mail"
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          ref={passwordRef}
          placeholder="Senha"
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500"
        >
          Cadastrar
        </button>
      </form>
      <Link
        to="/login"
        className="text-blue-700 block mt-4 text-center hover:underline "
      >
        Já tem uma conta? Faça login
      </Link>
    </div>
  );
}

// Exporta o componente para poder ser utilizado em outro arquivo
export default Cadastro;
