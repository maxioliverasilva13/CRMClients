import { gql } from "@apollo/client";


export const NUEVA_CUENTA = gql`
mutation newUser($input: UserInput) {
    newUser (input: $input) {
      id
      nombre
      apellido
      email
    }
  }
`;


export const AUTH_USER = gql`
mutation authUser($input: AuthInput) {
  authUser(input: $input) {
    token
  }
}
`