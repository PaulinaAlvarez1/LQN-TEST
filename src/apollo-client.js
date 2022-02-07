import { ApolloClient, InMemoryCache } from "@apollo/client";

// @constants
import {API_HOST} from './constants';

const client = new ApolloClient({
    uri: API_HOST,
    cache: new InMemoryCache(),
});

export default client;
