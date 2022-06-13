import { gql } from "@apollo/client";

export const GET_CLIENTES = gql`
  query clientes {
    getClientesVendedor {
      nombre
      apellido
      empresa
      email
      telefono
      created_at
      vendedor
      id
    }
  }
`;

export const CREATE_CLIENT = gql`
  mutation newClient($input: ClienteInput) {
    newClient(input: $input) {
      nombre
      apellido
      email
      telefono
      id
      empresa
    }
  }
`;

export const ELIMINAR_CLIENTE = gql`
  mutation deleteClient($deleteClientId: ID!) {
    deleteClient(id: $deleteClientId)
  }
`;

export const UPDATE_CLIENT = gql`
  mutation updateClient($updateClientId: ID!, $input: ClienteInput) {
    updateClient(id: $updateClientId, input: $input) {
      nombre
      apellido
      email
      telefono
      id
      empresa
    }
  }
`;
