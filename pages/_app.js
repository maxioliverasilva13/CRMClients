import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { ApolloProvider } from "@apollo/client";
import client from "../apolloClientConfig";
import { IconContext } from "react-icons";
import { Provider } from "react-redux";
import store from "../Store/store";

function MyApp({ Component, pageProps }) {
  return(
  <Provider store={store} >
    <ApolloProvider client={client}>
    <IconContext.Provider value={{ className: "global-class-name" }} >
      <Component {...pageProps} />
    </IconContext.Provider>
  </ApolloProvider>
  </Provider>
  );
}

export default MyApp
