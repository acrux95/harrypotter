import React from 'react';
import ReactDOM from 'react-dom';
import initialState from './initialState'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers';

import App from './routes/App';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer, initialState);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
