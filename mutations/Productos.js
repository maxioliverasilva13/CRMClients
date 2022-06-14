import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation nuevoProducto($input: ProductoInput) {
    newProduct(input: $input) {
      id
      nombre
      precio
      url
      created_at
      stock
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(id: $id)
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProducts($id: ID!, $input: ProductoInput) {
    updateProducts(id: $id, input: $input) {
      id
      nombre
      precio
      url
      stock
      created_at
    }
  }
`;
