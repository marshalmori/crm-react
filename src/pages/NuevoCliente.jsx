import { Fragment } from "react";
import { useNavigate, Form, useActionData } from "react-router-dom";
import Error from "../components/Error";
import Formulario from "../components/Formulario";

export async function action({ request }) {
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
}

const NuevoCliente = () => {
  const errores = useActionData();
  const navigate = useNavigate();

  return (
    <Fragment>
      <h1 className="font-black text-4xl text-blue-900">Novo Cliente</h1>
      <p className="mt-3">Leia todos os campos para cadastrar um cliente</p>
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
          <Formulario />

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

export default NuevoCliente;
