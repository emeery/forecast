import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import 'normalize.css/normalize.css';

import Pronostico from './componentes/Pronostico';
import reducers from './reducers';
const tienda = applyMiddleware(ReduxPromise)(createStore);

const jsx = (
    <Provider 
    store={tienda(reducers)} 
    >
        <Pronostico/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

