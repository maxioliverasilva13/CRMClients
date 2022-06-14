import Layout from "../Components/Layout";
import NuevoProductoForm from "../Components/NuevoProductoForm";
import useMensaje from "../hooks/useMensaje";
import useProductos from "../hooks/useProductos";

const NuevoProducto = () => {
  const { newProduct, loadingNewProduct } = useProductos();
  const { setMensaje } = useMensaje();

  const onSubmit = async (valores) => {
    const { nombre, precio, stock, url } = valores;

    try {
      const { data } = await newProduct({
        variables: {
          input: {
            url,
            nombre,
            precio,
            stock,
          },
        },
      });
      if (data?.newProduct?.id) {
        setMensaje({
          type: "Success",
          message: "Producto creado correctamente",
        });
      }
    } catch (error) {
      console.log(error);
      if (error?.message) {
        setMensaje({
          type: "Error",
          message: "error?.message",
        });
      }
    }
  };

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light"> Nuevo Producto </h1>

      <NuevoProductoForm
        initialValues={{
          nombre: "",
          stock: 0,
          precio: 0,
        }}
        onSubmit={onSubmit}
        isEdit={false}
        loading={loadingNewProduct}
      />
    </Layout>
  );
};

export default NuevoProducto;
