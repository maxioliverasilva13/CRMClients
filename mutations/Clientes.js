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
