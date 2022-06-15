import { useMutation, useQuery } from "@apollo/client";
import { AUTH_USER, NUEVA_CUENTA } from "../mutations/Usuario";
import { GET_USER_INFO } from "../queries/Usuario";

const DEFAULT_TOKEN_AUTH_KEY = "authToken";

const useUsuario = () => {
  const [nuevoUsuario, { loading: loadingNuevoUsuario }] =
    useMutation(NUEVA_CUENTA);
  const [authUser, { loading: loadingAuthUser }] = useMutation(AUTH_USER);
  const {
    client,
    data: userInfo,
    loading: loadingUserInfo,
  } = useQuery(GET_USER_INFO);

  const storeToken = (token) => {
    localStorage.setItem(DEFAULT_TOKEN_AUTH_KEY, token);
    client.resetStore();
  };
  const clearToken = () => {
    localStorage.removeItem(DEFAULT_TOKEN_AUTH_KEY);
    client.clearStore();
  };

  return {
    nuevoUsuario,
    loadingNuevoUsuario,
    authUser,
    loadingAuthUser,
    storeToken,
    clearToken,
    userInfo: userInfo?.obtenerUsuario,
    loadingUserInfo,
  };
};

export default useUsuario;
