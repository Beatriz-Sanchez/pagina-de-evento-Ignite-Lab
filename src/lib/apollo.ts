import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o5et1x0m7h01xihvlt8qks/master',
    cache: new InMemoryCache(),
})