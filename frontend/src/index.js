import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import authorReducer from './store/reducers/authorReducer';
import albumReducer from './store/reducers/albumReducer';
import usersReducer from './store/reducers/usersREducer';
import App from './App';
import './index.css';

const rootReducer = combineReducers({
  authors: authorReducer,
  albums: albumReducer,
  users: usersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
