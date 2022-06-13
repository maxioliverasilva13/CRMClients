import { gql } from "@apollo/client";

export const GET_CLIENT_INFO = gql`
  query getClientinfo($obtenerClienteId: ID!) {
    obtenerCliente(id: $obtenerClienteId) {
      nombre
      apellido
      email
      telefono
      id
      empresa
    }
  }
`;
