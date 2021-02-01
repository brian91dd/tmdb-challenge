import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { StateProvider } from './state';
import { INITIAL_STATE as MOVIES_INITIAL_STATE } from './state/movies/reducers';
import reducers from './state/reducers';

const initialState = {
  movies: MOVIES_INITIAL_STATE,
};

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducers}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateProvider>,
  document.getElementById('root'),
);
