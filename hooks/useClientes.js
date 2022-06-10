import React from "react";
import { GET_CLIENTES } from "../mutations/Clientes";
import { useQuery } from "@apollo/client";

const DEFAULT_TOKEN_AUTH_KEY = "authToken";

const useClientes = () => {
    const { data: clientes, loading: loadingClientes, error: errorClientes } = useQuery(GET_CLIENTES);

    return {
      clientes,
      loadingClientes,
      errorClientes,
    }
}

export default useClientes;