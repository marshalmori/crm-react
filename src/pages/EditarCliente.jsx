import { obtenerCliente, actualizarCliente } from "../data/clientes";
import { Fragment } from "react";
import Error from "../components/Error";
import {
  Form,
  useNavigate,
  useLoaderData,
  useActionData,
  redirect,
} from "react-router-dom";
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

export async function action({ request, params }) {
  const formData = await request.formData();

  const datos = Object.fromEntries(formData);

  const email = formData.get("email");

  //Validação
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos os campos são obrigatórios.");
  }

  //Validação do email
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    errores.push("O email não é válido.");
  }

  //Retornar dados se tem erros
  if (Object.keys(errores).length) {
    return errores;
  }

  //Atualizar cliente
  await actualizarCliente(params.clienteId, datos);
  return redirect("/");
}

const EditarCliente = () => {
  const navigate = useNavigate();
  const cliente = useLoaderData();
  const errores = useActionData();

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
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="post">
          <Formulario cliente={cliente} />

          <input
            type="submit"
            className="p-1 mt-5 w-full bg-yellow-600 hover:bg-blue-900 uppercase font-bold text-white text-lg"
            value="Editar cliente"
          />
        </Form>
      </div>
    </Fragment>
  );
};

export default EditarCliente;
