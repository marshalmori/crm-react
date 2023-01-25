import { obtenerCliente } from "../data/clientes";

export async function loader({ params }) {
  const cliente = await obtenerCliente(params.clienteId);
  if (Object.values(cliente).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Cliente não foi encontrado.",
    });
  }
  return cliente;
}

const EditarCliente = () => {
  return <div>EditarCliente</div>;
};

export default EditarCliente;
