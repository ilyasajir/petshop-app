import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";

  const client = new ApolloClient({
    uri: 'https://factual-akita-99.hasura.app/v1/graphql',
    cache: new InMemoryCache()
  });

  export default client