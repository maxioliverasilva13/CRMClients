import React from "react";
import Layout from "../Components/Layout";
import { keys, isEmpty } from "ramda";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";


const SignUp = () => {

  const { values, handleSubmit, handleChange, errors, handleBlur, touched, isValid } = useFormik({
      initialValues: {
          nombre: "",
          apellido: "",
          email: "",
          password: ""
      },
      validationSchema: Yup.object({
          nombre: Yup.string().required("El cambio nombre es requerido"),
          apellido: Yup.string().required("El cambio apellido es requerido"),
          email: Yup.string().required("El cambio email es requerido").email("El email no es valido"),
          password: Yup.string().required("El cambio password es requerido").min(6, "El password debe tener 6 caracteres"),
      }) ,
      onSubmit: (valores) => {
          console.log("Enviando");
          console.log(valores);
      }
  });

  const formmikError = (value) => {
      return touched[value] && errors[value] && (
          <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 ">
              <p className="font-bold">Error</p>
              <p>{errors[value]}</p>
          </div>
      )
  }

  return (
    <Layout>
      <h1 className="text-center text-2xl text-white">Sign Up</h1>

      <div className="w-full flex justify-center mt-5">
        <div className="w-4/5 sm:w-96 max-w-full" >
            <form onSubmit={handleSubmit} className="w-full bg-white transition ease-in-out delay-1000 rounded shadow-md px-8 pt-6 pb-8 mb-4 " >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
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
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">
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
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
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
                    />
                    {formmikError("password")}
                </div>
                <input 
                  type="submit"
                  className="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900 hover:scale-105 transition cursor-pointer rounded disabled:bg-gray-400"
                  value="Registrate"
                  disabled={!isValid}
                />
            </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
