const Formulario = ({ cliente }) => {
  return (
    <>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="nombre">
          Nome:
        </label>
        <input
          id="nombre"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Nome do cliente"
          name="nombre"
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="empresa">
          Empresa:
        </label>
        <input
          id="empresa"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Nome da empresa"
          name="empresa"
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="email">
          E-mail:
        </label>
        <input
          id="email"
          type="email"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Email do cliente"
          name="email"
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="telefono">
          Telefone:
        </label>
        <input
          id="telefono"
          type="tel"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Telefone do Cliente"
          name="telefono"
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="notas">
          Observações:
        </label>
        <textarea
          as="textarea"
          id="notas"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
          placeholder="Notas do cliente"
          name="notas"
        />
      </div>
    </>
  );
};

export default Formulario;
