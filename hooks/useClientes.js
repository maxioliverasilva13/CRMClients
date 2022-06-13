import { useMutation, useQuery } from "@apollo/client";
import { CREATE_CLIENT, GET_CLIENTES } from "../mutations/Clientes";

const useClientes = () => {
  const {
    data: clientes,
    loading: loadingClientes,
    error: errorClientes,
  } = useQuery(GET_CLIENTES);
  const [newClient, { loading: loadingNewClient }] = useMutation(CREATE_CLIENT);

  return {
    clientes,
    loadingClientes,
    errorClientes,
    newClient,
    loadingNewClient,
  };
};

export default useClientes;
