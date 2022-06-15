import { useReducer } from "react";
import PedidoContext from "./PedidoContext";
import PedidoReducer from "./PedidoReducer";

const PedidoState = ({ children }) => {
  // State de pedidos
  const initialState = {
    cliente: [],
    productos: [],
    total: 0,
  };
  const [state, dispatch] = useReducer(PedidoReducer, initialState);

  const exampleContext = () => {
    console.log("hola mundo desde context");
  };

  return (
    <PedidoContext.Provider
      value={{
        total: state?.total,
        cliente: state?.cliente,
        productos: state?.productos,
        exampleContext,
      }}
    >
      {children}
    </PedidoContext.Provider>
  );
};

export default PedidoState;
