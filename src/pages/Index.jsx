import { Fragment } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Cliente from "../components/Cliente";
import { obtenerClientes } from "../data/clientes";

export function loader() {
  const clientes = obtenerClientes();

  return clientes;
}

const Index = () => {
  const clientes = useLoaderData();
  const navigate = useNavigate();

  return (
    <Fragment>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administrar Clientes</p>
      <div className="flex justify-end">
        <button
          className="bg-yellow-600 hover:bg-blue-900 text-white px-3 py-1 font-bold uppercase mb-2"
          onClick={() => navigate("clientes/nuevo")}
        >
          Novo Cliente
        </button>
      </div>
      {clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contato</th>
              <th className="p-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <Cliente cliente={cliente} key={cliente.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">Não temos clientes cadastrados.</p>
      )}
    </Fragment>
  );
};

export default Index;
