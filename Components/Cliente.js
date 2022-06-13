import Router from "next/router";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";
import useClientes from "../hooks/useClientes";

const Cliente = ({ cliente }) => {
  const { deleteClient, loadingDeleteClient } = useClientes({
    clientIdToDelete: cliente?.id,
  });

  const confirmarEliminarCliente = async (id) => {
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
          const { data } = await deleteClient({
            variables: {
              deleteClientId: id,
            },
          });
          if (data?.deleteClient === "Cliente Eliminado") {
            Swal.fire("Eliminado!", "El usuario fue eliminado.", "success");
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const editarCliente = () => {
    Router.push({
      pathname: "/editarcliente/[id]",
      query: {
        id: cliente?.id,
      },
    });
  };

  return (
    <tr className="p-2">
      <td className="border px-4 py-2">
        {cliente?.nombre} {cliente?.apellido}
      </td>
      <td className="border px-4 py-2">{cliente?.empresa}</td>
      <td className="border px-4 py-2">{cliente?.email}</td>
      <td className="border px-4 py-2 flex flex-row items-center justify-start">
        <button
          type="button"
          onClick={() => confirmarEliminarCliente(cliente?.id)}
          className="flex justify-center items-center bg-red-800 text-white py-2 px-4 rounded text-xs"
        >
          <FiTrash2 size={24} className="mr-2 text-white" />
          Eliminar
        </button>
        <button
          type="button"
          onClick={() => editarCliente()}
          className="flex ml-2 justify-center items-center bg-green-600 text-white py-2 px-4 rounded text-xs"
        >
          <FiEdit size={24} className="mr-2 text-white" />
          Editar
        </button>
      </td>
    </tr>
  );
};

export default Cliente;
