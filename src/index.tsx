import * as React from 'react';
import * as reactDom from 'react-dom';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
    uri: 'https://petgram-server-jrmfsd-okxluew9o.now.sh/graphql',
});
const BASE_URL = process.env.REACT_APP_BASE_PATH || '';
reactDom.render(
    <BrowserRouter basename={BASE_URL}>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('app'),
);
