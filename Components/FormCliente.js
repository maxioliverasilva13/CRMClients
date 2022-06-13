import { useFormik } from "formik";
import * as Yup from "yup";

const FormCliente = ({ onSubmit, loading, initialValues, buttonText }) => {
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    isValid,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre es obligatorio"),
      apellido: Yup.string().required("El apellido es obligatorio"),
      empresa: Yup.string().required("La empresa es obligatoria"),
      email: Yup.string()
        .required("El email es obligatorio")
        .email("Email no valido"),
    }),
    onSubmit: onSubmit,
  });

  const renderErrors = () => {
    const errores = Object.keys(errors);
    return (
      errores?.length > 0 && (
        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          <p className="font-bold">Errores</p>
          {errores?.map((errorKey) => {
            return (
              touched[errorKey] && (
                <p key={errorKey} className="">
                  * {errors[errorKey]}
                </p>
              )
            );
          })}
        </div>
      )
    );
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="w-full max-w-lg">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md px-8 pt-6 pb-8 mb-4 "
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
              type="text"
              placeholder="Nombre"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.nombre}
            />
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
              type="text"
              placeholder="Apellido"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.apellido}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="empresa"
            >
              Empresa
            </label>
            <input
              id="empresa"
              className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none"
              name="empresa"
              type="text"
              placeholder="Empresa"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.empresa}
            />
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
              type="email"
              placeholder="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="telefono"
            >
              Telefono
            </label>
            <input
              id="telefono"
              className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none"
              name="telefono"
              type="tel"
              placeholder="Telefono"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.telefono}
            />
          </div>

          {renderErrors()}

          <input
            disabled={!isValid || loading}
            type="submit"
            className="cursor-pointer disabled:bg-gray-500 bg-gray-800 w-full mt-5 p-2 text-white font-bold text-md hover:bg-gray-800"
            value={buttonText}
          />
        </form>
      </div>
    </div>
  );
};

export default FormCliente;
