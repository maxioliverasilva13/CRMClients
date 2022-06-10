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
`