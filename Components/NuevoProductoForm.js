import { useFormik } from "formik";
import NavLink from "next/link";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineDone } from "react-icons/md";
import { RiEditFill } from "react-icons/ri";
import * as Yup from "yup";
import { uploadImage } from "../helpers/cloudDinary";
import ProductImageUpload from "./ProductImageUpload";

const NuevoProductoForm = ({ onSubmit, loading, initialValues, isEdit }) => {
  const [file, setFile] = useState(null);

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    values,
    isValid,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      stock: Yup.number()
        .required("El Stock es requerido")
        .moreThan(-1, "El stock debe ser mayor a 0"),
      precio: Yup.number()
        .required("El Precio es requerido")
        .moreThan(-1, "El Precio debe ser mayor a 0"),
      nombre: Yup.string().required("El nombre es requerido"),
    }),
    onSubmit: async (valores) => {
      let url =
        "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png";
      if (file) {
        const imageUrl = await uploadImage(file);
        url = imageUrl;
      }
      valores = {
        ...valores,
        url,
      };
      onSubmit(valores);
    },
  });

  const renderErrors = () => {
    const errores = Object.keys(errors);
    return (
      errores?.length > 0 && (
        <div className="mt-2 mx-0">
          <p className="font-bold">Errores</p>
          {errores?.map((errorKey) => {
            return (
              touched[errorKey] && (
                <p
                  key={errorKey}
                  className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3"
                >
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
    <div className="w-full mt-40 flex-grow flex items-center justify-center">
      <div className="w-auto h-auto rounded-lg overflow-hidden flex shadow-xl flex-col items-center justify-center bg-gray-100">
        <div className="w-full h-40 bg-gray-200">
          <ProductImageUpload setFile={setFile} url={initialValues?.url} />
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full h-auto flex flex-col items-center justify-start  p-2"
        >
          <div className="w-full my-2 px-4 flex flex-row items-center justify-between">
            <label
              className="block text-gray-700 text-sm font-bold flex-grow"
              htmlFor="nombre"
            >
              Nombre
            </label>
            <input
              id="nombre"
              type="text"
              className="shadow w-48 ml-4 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none"
              name="nombre"
              placeholder="Nombre"
              value={values?.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="w-full my-2 px-4 flex flex-row items-center justify-between">
            <label
              className="block text-gray-700 text-sm font-bold flex-grow"
              htmlFor="stock"
            >
              Stock
            </label>
            <input
              id="stock"
              className="shadow w-48 ml-4 appearance-none border  rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none"
              name="stock"
              type="number"
              placeholder="stock"
              value={values?.stock}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="w-full my-2 px-4 flex flex-row items-center justify-between">
            <label
              className="block text-gray-700 text-sm font-bold flex-grow"
              htmlFor="precio"
            >
              Precio
            </label>
            <input
              id="precio"
              type="number"
              className="shadow w-48 ml-4 appearance-none border  rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none"
              name="precio"
              placeholder="Precio"
              value={values?.precio}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          {renderErrors()}
          <div className="w-full mt-8 mb-2 flex flex-row items-center justify-between">
            <NavLink href="/productos">
              <button
                type="button"
                className="w-auto h-auto rounded-full p-2 bg-red-500 "
              >
                <IoIosArrowBack size={24} className="text-white font-bold" />
              </button>
            </NavLink>
            <button
              disabled={!isValid || loading}
              type="submit"
              className="w-auto h-auto rounded-full p-2 bg-green-500 disabled:bg-gray-300 "
            >
              {isEdit ? (
                <RiEditFill size={24} className="text-white font-bold" />
              ) : (
                <MdOutlineDone size={24} className="text-white font-bold" />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NuevoProductoForm;
