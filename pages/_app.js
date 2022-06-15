import { ApolloProvider } from "@apollo/client";
import { IconContext } from "react-icons";
import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import client from "../apolloClientConfig";
import PedidoState from "../context/pedidos/PedidoState";
import store from "../Store/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <PedidoState>
          <IconContext.Provider value={{ className: "global-class-name" }}>
            <Component {...pageProps} />
          </IconContext.Provider>
        </PedidoState>
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
