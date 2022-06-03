import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { reducer } from './redux/reducers/reducer';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store=createStore(reducer,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>
);

