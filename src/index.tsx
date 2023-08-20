/**
 * The app's entrypoint file.
 *
 * @module
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import AppInfo from '../package.json';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './index.css';

/**
 * The central GraphQL client.
 *
 * @constant
 */
const client = new ApolloClient({
  uri: AppInfo.codegen.schema,
  cache: new InMemoryCache(),
});

/**
 * React bootstrapping logic.
 *
 * @function
 * @name anonymous
 */
(() => {
  // grab the root container
  const container = document.getElementById('root');

  if (!container) {
    throw new Error('Failed to find the root element.');
  }

  // render the react application
  const root = ReactDOM.createRoot(container);

  root.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>,
  );
})();
