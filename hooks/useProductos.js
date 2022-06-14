import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "../mutations/Productos";
import { GET_PRODUCTO, GET_PRODUCTOS } from "../queries/Productos";

const useProductos = (props) => {
  const productoID = props?.productoID;
  const deleteProductId = props?.deleteProductId;

  const { data: productos, loading: loadingProductos } =
    useQuery(GET_PRODUCTOS);
  const [newProduct, { loading: loadingNewProduct }] = useMutation(
    CREATE_PRODUCT,
    {
      update: (cache, { data: newClient }) => {
        const { obtenerProductos } = cache.readQuery({
          query: GET_PRODUCTOS,
        });

        cache.writeQuery({
          query: GET_PRODUCTOS,
          data: {
            obtenerProductos: [...obtenerProductos, newClient],
          },
        });
      },
    }
  );
  const { data: productoInfo, loading: loadingProductoInfo } = useQuery(
    GET_PRODUCTO,
    {
      variables: {
        id: productoID,
      },
    }
  );

  const [updateProduct, { loading: loadingUpdateProduct }] =
    useMutation(UPDATE_PRODUCT);

  const [deleteProduct, { loading: loadingDeleteProduct }] = useMutation(
    DELETE_PRODUCT,
    {
      update(cache) {
        const { obtenerProductos } = cache.readQuery({
          query: GET_PRODUCTOS,
        });
        cache.writeQuery({
          query: GET_PRODUCTOS,
          data: {
            obtenerProductos: obtenerProductos?.filter(
              (prod) => prod?.id != deleteProductId
            ),
          },
        });
      },
    }
  );

  return {
    productos,
    loadingProductos,
    newProduct,
    loadingNewProduct,
    productoInfo,
    loadingProductoInfo,
    updateProduct,
    loadingUpdateProduct,
    deleteProduct,
    loadingDeleteProduct,
  };
};

export default useProductos;
