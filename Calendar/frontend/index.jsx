import React from 'react';
import ReactDOM from 'react-dom'

import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();

  // TEST FNCS
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TEST END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
