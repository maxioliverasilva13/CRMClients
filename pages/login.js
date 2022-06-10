import React from "react";
import Layout from "../Components/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import Alert from "../Components/Alert";
import useUsuario from "../hooks/useUsuario";
import { useRouter } from "next/router";
import useMensaje from "../hooks/useMensaje";

const Login = () => {
    const { authUser, loadingAuthUser, storeToken } = useUsuario();
    const { push } = useRouter();
    const { mensaje, setMensaje } = useMensaje();

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
          email: "",
          password: "",
        },
        validationSchema: Yup.object({
          email: Yup.string()
            .required("El cambio email es requerido")
            .email("El email no es valido"),
          password: Yup.string()
            .required("El cambio password es requerido")
            .min(6, "El password debe tener 6 caracteres"),
        }),
        onSubmit: async (valores) => {
          try {
            const { data } = await authUser({
                variables: {
                  input: valores,
                },
            })
            if (data?.authUser?.token) {
                storeToken(data?.authUser?.token);
                push("/");
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

    const showError = () => {
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
      <h1 className="text-center text-2xl text-white">Login</h1>
      {showError()}
      <div className="w-full flex justify-center mt-5">
        <div className="w-4/5 sm:w-96 max-w-full" >
            <form onSubmit={handleSubmit} className="w-full bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4 " >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none"
                      name="email"
                      placeholder="Email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                    />
                    {formmikError("email")}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                      Password
                    </label>
                    <input
                      id="password"
                      className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none"
                      name="password"
                      placeholder="Password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      values={values.password}
                      type="password"
                    />
                    {formmikError("password")}
                </div>
                <input 
                  type="submit"
                  className="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900 hover:scale-105 transition cursor-pointer rounded"
                  value="Iniciar Sesion"
                  disabled={!isValid || loadingAuthUser}
                />
            </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
