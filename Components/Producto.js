import Router from "next/router";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";
import useMensaje from "../hooks/useMensaje";
import useProductos from "../hooks/useProductos";

const Producto = ({ producto }) => {
  const { setMensaje } = useMensaje();
  const { id, nombre, stock, precio, url } = producto;
  const { deleteProduct, loadingDeleteProduct } = useProductos({
    deleteProductId: id,
  });

  const editarproducto = () => {
    Router.push({
      pathname: "/editarproducto/[id]",
      query: {
        id: id,
      },
    });
  };

  const handleDeleteProduct = async () => {
    Swal.fire({
      title: "Estas seguro?",
      text: "No podras revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "No, cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await deleteProduct({
            variables: {
              id,
            },
          });
          if (data?.deleteProduct === "Producto Eliminado") {
            setMensaje({
              type: "Success",
              message: data?.deleteProduct,
            });
          }
        } catch (error) {
          console.log(error);
          if (error?.message) {
            setMensaje({
              type: "Error",
              message: error?.message,
            });
          }
        }
      }
    });
  };

  return (
    <div className="w-52 h-auto rounded-lg overflow-hidden mx-4 flex shadow-md flex-col items-center justify-center">
      <div className="w-full h-32 bg-gray-200">
        {url && <img className="w-full h-full object-cover" src={url}></img>}
      </div>
      <div className="w-full h-auto flex flex-col items-start justify-center  p-2">
        <p>{nombre}</p>
        <p>Stock: {stock}</p>
        <p>Precio: ${precio}</p>
      </div>
      <div className="w-full h-auto flex flex-row items-center justify-start  p-2">
        <button
          onClick={() => handleDeleteProduct()}
          type="button"
          className="flex w-10 h-10 justify-center items-center bg-red-800 text-white p-2  text-xs text-center rounded-full"
        >
          <FiTrash2 size={16} className=" text-white" />
        </button>
        <button
          onClick={editarproducto}
          type="button"
          className="flex w-10 h-10 ml-2 justify-center items-center bg-green-600 text-white p-2  text-xs text-center rounded-full"
        >
          <FiEdit size={16} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Producto;
