import { gql } from "@apollo/client";

export const GET_PRODUCTOS = gql`
  query obtenerProductos {
    obtenerProductos {
      id
      nombre
      stock
      precio
      url
      created_at
    }
  }
`;

export const GET_PRODUCTO = gql`
  query obtenerProducto($id: ID!) {
    obtenerProducto(id: $id) {
      id
      nombre
      precio
      stock
      url
      created_at
    }
  }
`;
