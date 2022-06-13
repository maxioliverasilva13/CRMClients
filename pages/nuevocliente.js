import FormCliente from "../Components/FormCliente";
import Layout from "../Components/Layout";
import useClientes from "../hooks/useClientes";
import useMensaje from "../hooks/useMensaje";

const NuevoCliente = () => {
  const { newClient, loadingNewClient } = useClientes();
  const { setMensaje } = useMensaje();

  const handleSubmit = async (valores) => {
    try {
      const { data } = await newClient({
        variables: {
          input: valores,
        },
      });
      if (data?.newClient?.id) {
        setMensaje({
          type: "Success",
          message: `Se creo correctamente el cliente ${data?.newClient?.nombre}`,
        });
      }
    } catch (error) {
      if (error?.message) {
        setMensaje({
          type: "Error",
          message: error?.message,
        });
      }
    }
  };

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light"> Nuevo Cliente </h1>

      <FormCliente
        loading={loadingNewClient}
        onSubmit={handleSubmit}
        buttonText={"Registrar Cliente"}
        initialValues={{
          nombre: "",
          apellido: "",
          empresa: "",
          email: "",
          telefono: "",
        }}
      />
    </Layout>
  );
};

export default NuevoCliente;
