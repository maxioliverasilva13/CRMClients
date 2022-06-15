import { useRouter } from "next/router";
import Layout from "../../Components/Layout";
import Loading from "../../Components/Loading";
import NuevoProductoForm from "../../Components/NuevoProductoForm";
import useMensaje from "../../hooks/useMensaje";
import useProductos from "../../hooks/useProductos";

const EditarProducto = () => {
  const { query } = useRouter();
  const productoID = query?.pid;
  const { setMensaje } = useMensaje();
  const {
    productoInfo,
    loadingProductoInfo,
    updateProduct,
    loadingUpdateProduct,
  } = useProductos({
    productoID,
  });

  const onSubmit = async (values) => {
    const { nombre, precio, stock, url } = values;
    try {
      const { data } = await updateProduct({
        variables: {
          id: productoID,
          input: {
            url,
            nombre,
            precio,
            stock,
          },
        },
      });
      if (data?.updateProducts?.id) {
        setMensaje({
          type: "Success",
          message: "Producto actualziado correctamente",
        });
      }
    } catch (error) {
      console.log(error);
      if (error?.message) {
        setMensaje({
          type: "Error",
          message: error.message,
        });
      }
    }
  };

  console.log(productoInfo?.obtenerProducto);

  return (
    <Layout>
      {loadingProductoInfo || !productoInfo?.obtenerProducto ? (
        <Loading />
      ) : (
        <>
          <h1 className="text-2xl text-gray-800 font-light">
            {" "}
            Editar Producto{" "}
          </h1>

          <NuevoProductoForm
            initialValues={productoInfo?.obtenerProducto}
            onSubmit={onSubmit}
            isEdit
            loading={false}
          />
        </>
      )}
    </Layout>
  );
};

export default EditarProducto;
