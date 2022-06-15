import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import * as Yup from "yup";
import Alert from "../Components/Alert";
import ImageUpload from "../Components/ImageUpload";
import Layout from "../Components/Layout";
import { uploadImage } from "../helpers/cloudDinary";
import useMensaje from "../hooks/useMensaje";
import useUsuario from "../hooks/useUsuario";

const SignUp = () => {
  const { nuevoUsuario, loadingNuevoUsuario } = useUsuario();
  const [file, setfile] = useState();

  const { push } = useRouter();
  const redirectToLogin = (message) => {
    if (message?.type === "Success") {
      push("/login");
    }
  };
  const { setMensaje } = useMensaje(redirectToLogin);

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
        let url =
          "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg";
        if (file) {
          const imageUrl = await uploadImage(file);
          url = imageUrl;
        }

        const { data } = await nuevoUsuario({
          variables: {
            input: {
              ...valores,
              profile_photo: url,
            },
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

  return (
    <Layout>
      <h1 className="text-center text-2xl text-white">Sign Up</h1>

      <div className="w-full flex justify-center mt-5">
        <div className="w-4/5 sm:w-96 max-w-full">
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white transition ease-in-out delay-1000 rounded shadow-md px-8 pt-6 pb-8 mb-4 "
          >
            <div className=" w-full h-auto flex flex-row items-center justify-start">
              <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden ">
                <ImageUpload isCircle setFile={setfile} />
              </div>
              <label
                className="ml-4 block text-gray-700 text-sm font-bold mb-2"
                htmlFor="dropzone-file"
              >
                Profile Photo
              </label>
            </div>
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

            <p className="my-2 font-light">
              No tienes una cuenta ?{" "}
              <Link href="/signup">
                <span
                  className="font-bold text-gray-800 hover:border-b-2 border-b-gray-800 cursor-pointer"
                  n
                >
                  Registrate
                </span>
              </Link>
            </p>

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
