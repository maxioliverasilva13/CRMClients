import React, { useEffect } from "react";
import { NUEVA_CUENTA, AUTH_USER } from "../mutations/Usuario";
import { GET_USER_INFO } from "../queries/Usuario";
import { useMutation, useQuery } from "@apollo/client";

const DEFAULT_TOKEN_AUTH_KEY = "authToken";

const useUsuario = () => {
    const [ nuevoUsuario, { loading: loadingNuevoUsuario } ] = useMutation(NUEVA_CUENTA);
    const [ authUser, { loading: loadingAuthUser } ] = useMutation(AUTH_USER);
    const { data: userInfo, loading: loadingUserInfo } = useQuery(GET_USER_INFO);

    const storeToken = (token) => {
        localStorage.setItem(DEFAULT_TOKEN_AUTH_KEY, token);
    };
    const clearToken = () => {
        localStorage.removeItem(DEFAULT_TOKEN_AUTH_KEY);
    }

    return {
        nuevoUsuario,
        loadingNuevoUsuario,
        authUser,
        loadingAuthUser,
        storeToken,
        clearToken,
        userInfo: userInfo?.obtenerUsuario,
        loadingUserInfo,
    }
}

export default useUsuario;