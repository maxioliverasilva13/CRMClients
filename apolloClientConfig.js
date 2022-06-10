import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "apollo-link-context";
import fetch from "node-fetch";

const httpLink = createHttpLink({
   uri: "http://localhost:4000",
   fetch,
})

const authLink = setContext((_, { headers } ) => {
    //Read the storage 
    const token = () => localStorage.getItem("authToken");

    return {
        headers: {
            ...headers,
            authorization: token() ? `Bearer ${token()}` : null,
        }
    }
})

const Client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
});

export default Client