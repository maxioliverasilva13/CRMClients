import React from "react";
import Layout from "../Components/Layout";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import useUsuario from "../hooks/useUsuario";
import useMensaje from "../hooks/useMensaje";
import Alert from "../Components/Alert";

const initialMensaje = {
  type: null,
  message: null,
};

const SignUp = () => {
  const { nuevoUsuario, loadingNuevoUsuario } = useUsuario();
  const { push } = useRouter();
  const redirectToLogin = (message) => {
    if (message?.type === "Success") {
      push("/login");
    }
  }
  const { mensaje, setMensaje } = useMensaje(redirectToLogin);

  const {
    values,
    handleSubmit,
    handleChange,
    errors,
    handleBlur,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El cambio nombre es requerido"),
      apellido: Yup.string().required("El cambio apellido es requerido"),
      email: Yup.string()
        .required("El cambio email es requerido")
        .email("El email no es valido"),
      password: Yup.string()
        .required("El cambio password es requerido")
        .min(6, "El password debe tener 6 caracteres"),
    }),
    onSubmit: async (valores) => {
      try {
        const { data } = await nuevoUsuario({
          variables: {
            input: valores,
          },
        });
        if (data?.newUser?.id) {
          setMensaje({
            type: "Success",
            message: `Usuario registrado existosamente el usuario ${data?.newUser?.nombre}`,
          });
        }
      } catch (error) {
        if (error?.message) {
          setMensaje({
            type: "Error",
            message: error?.message,
          });
        }
      }
    },
  });

  const formmikError = (value) => {
    return (
      <Alert
        type="BoxError"
        additionalCondition={touched[value] && errors[value]}
        message={errors[value]}
      />
    );
  };

  const mostrarMensaje = () => {
    return (
      <Alert
        additionalCondition={mensaje?.message}
        type="Alert"
        message={mensaje.message}
        errorType={mensaje.type}
      />
    );
  };

  return (
    <Layout>
      <h1 className="text-center text-2xl text-white">Sign Up</h1>

      {mostrarMensaje()}

      <div className="w-full flex justify-center mt-5">
        <div className="w-4/5 sm:w-96 max-w-full">
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white transition ease-in-out delay-1000 rounded shadow-md px-8 pt-6 pb-8 mb-4 "
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                id="nombre"
                className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none"
                name="nombre"
                placeholder="Nombre"
                value={values?.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {formmikError("nombre")}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="apellido"
              >
                Apellido
              </label>
              <input
                id="apellido"
                className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none"
                name="apellido"
                placeholder="Apellido"
                value={values?.apellido}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {formmikError("apellido")}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none"
                name="email"
                placeholder="Email"
                value={values?.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {formmikError("email")}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none"
                name="password"
                placeholder="Password"
                value={values?.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
              />
              {formmikError("password")}
            </div>
            <input
              type="submit"
              className="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900 hover:scale-105 transition cursor-pointer rounded disabled:bg-gray-400"
              value={loadingNuevoUsuario ? "Loading..." : "Registrate"}
              disabled={!isValid || loadingNuevoUsuario}
            />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
