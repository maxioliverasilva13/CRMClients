import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_CLIENT,
  ELIMINAR_CLIENTE,
  GET_CLIENTES,
  UPDATE_CLIENT,
} from "../mutations/Clientes";
import { GET_CLIENT_INFO } from "../queries/Cliente";

const useClientes = (props) => {
  const clientIdToDelete = props?.clientIdToDelete;
  const clientId = props?.clientId;
  // TODO : use redux and remove clientIdToDelete

  const {
    data: clientes,
    loading: loadingClientes,
    error: errorClientes,
  } = useQuery(GET_CLIENTES);
  const [newClient, { loading: loadingNewClient }] = useMutation(
    CREATE_CLIENT,
    {
      update(cache, { data: { newClient } }) {
        // obtener el objeto que deseamos actualizar
        const { getClientesVendedor } = cache.readQuery({
          query: GET_CLIENTES,
        });

        //rescribimos el cache
        cache.writeQuery({
          query: GET_CLIENTES,
          data: {
            getClientesVendedor: [...getClientesVendedor, newClient],
          },
        });
      },
    }
  );
  const [deleteClient, { loading: loadingDeleteClient }] = useMutation(
    ELIMINAR_CLIENTE,
    {
      update: (cache) => {
        const { getClientesVendedor } = cache.readQuery({
          query: GET_CLIENTES,
        });

        // rescribimos el cache
        cache.writeQuery({
          query: GET_CLIENTES,
          data: {
            getClientesVendedor: getClientesVendedor?.filter(
              (clienteActual) => clienteActual.id != clientIdToDelete
            ),
          },
        });
      },
    }
  );

  const [updateClient, { loading: loadingUpdateClient }] =
    useMutation(UPDATE_CLIENT);

  const {
    data: clientInfo,
    loading: loadingClientInfo,
    error: errorClientInfo,
  } = useQuery(GET_CLIENT_INFO, {
    variables: {
      obtenerClienteId: clientId || null,
    },
  });

  return {
    clientes,
    loadingClientes,
    errorClientes,
    newClient,
    loadingNewClient,
    deleteClient,
    loadingDeleteClient,
    updateClient,
    loadingUpdateClient,
    clientInfo,
    loadingClientInfo,
  };
};

export default useClientes;
