import { obtenerCliente } from "../data/clientes";
import { Fragment } from "react";
import { Form, useNavigate, useLoaderData } from "react-router-dom";
import Formulario from "../components/Formulario";

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
  const navigate = useNavigate();
  const cliente = useLoaderData();

  return (
    <Fragment>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">Leia todos os campos para editar um cliente</p>
      <div className="flex justify-end">
        <button
          className="bg-yellow-600 hover:bg-blue-900 text-white px-3 py-1 font-bold uppercase mb-2"
          onClick={() => navigate("/")}
        >
          Clientes
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {/* {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)} */}

        <Form method="post">
          <Formulario cliente={cliente} />

          <input
            type="submit"
            className="p-1 mt-5 w-full bg-yellow-600 hover:bg-blue-900 uppercase font-bold text-white text-lg"
            value="Registrar cliente"
          />
        </Form>
      </div>
    </Fragment>
  );
};

export default EditarCliente;
