import { useRouter } from "next/router";
import { isNil } from "ramda";
import FormCliente from "../../Components/FormCliente";
import Layout from "../../Components/Layout";
import Loading from "../../Components/Loading";
import useClientes from "../../hooks/useClientes";
import useMensaje from "../../hooks/useMensaje";

const EditarCliente = () => {
  const { setMensaje } = useMensaje();
  const { query } = useRouter();
  const clientID = query?.pid;
  const { updateClient, loadingUpdateClient, clientInfo, loadingClientInfo } =
    useClientes({
      clientId: clientID,
    });

  if (isNil(clientInfo?.obtenerCliente) && !loadingClientInfo) {
    return <p>El id del usuario no es valido</p>;
  }

  const handleSubmit = async (valores) => {
    const newValues = {
      nombre: valores?.nombre,
      apellido: valores?.apellido,
      email: valores?.email,
      empresa: valores?.empresa,
      telefono: valores?.telefono,
    };
    try {
      const { data } = await updateClient({
        variables: {
          updateClientId: clientID,
          input: newValues,
        },
      });
      if (data?.updateClient?.id) {
        setMensaje({
          type: "Success",
          message: "Cliente editado existosamente",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light"> Editar Cliente </h1>
      {loadingClientInfo ? (
        <Loading />
      ) : (
        <FormCliente
          loading={loadingUpdateClient}
          onSubmit={handleSubmit}
          buttonText={"Guardar Cambios"}
          initialValues={clientInfo?.obtenerCliente}
        />
      )}
    </Layout>
  );
};

export default EditarCliente;
