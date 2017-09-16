import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Estilos globales
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// Redux
import client from './redux/client';
import store from './redux/store';

// Páginas
import Home from './pages/Home/Home';

function App() {
  const e = React.createElement;
  return (
    e(ApolloProvider, { client, store },
      e(BrowserRouter, null,
        e(Switch, null,
          e(Route, { path: '/', exact: true, component: Home }),
        ),
      ),
    )
  );
}

export default App;
