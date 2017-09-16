import { ApolloClient, createNetworkInterface } from 'react-apollo';

// Instancia de ApolloClient para ser usado con el componente de alto orden ApolloProvider
const client = new ApolloClient({
  // Interfaz para la comunicación entre React & Apollo
  networkInterface: createNetworkInterface({
    uri: process.env.REACT_APP_GRAPHQL_URI,
  }),
  dataIdFromObject: o => o.id,
  connectToDevTools: process.env.NODE_ENV === 'development',
});

export default client;
