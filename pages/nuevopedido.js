import { useContext } from "react";
import Layout from "../Components/Layout";
import AsignarCliente from "../Components/Pedidos/AsignarCliente";
import PedidoContext from "../context/pedidos/PedidoContext";

const NuevoPedido = () => {
  // utilizar el context creado
  const { exampleContext } = useContext(PedidoContext);

  console.log(exampleContext);

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">Crear Nuevo Pedido </h1>

      <AsignarCliente />
    </Layout>
  );
};

export default NuevoPedido;
