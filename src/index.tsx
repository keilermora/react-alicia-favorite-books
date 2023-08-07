import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './configs/serviceWorkerRegistration';
import reportWebVitals from './configs/reportWebVitals';
import ReactGA from 'react-ga';
import { BrowserRouter } from 'react-router-dom';

const { REACT_APP_TRACKING_ID } = process.env;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/react-alicia-favorite-books">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

if (REACT_APP_TRACKING_ID) {
  ReactGA.initialize(REACT_APP_TRACKING_ID);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(({ id, name, value }) => {
  ReactGA.event({
    category: 'Web Vitals',
    action: name,
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate
  });
});
