import {combineReducers} from 'redux';
import reducerClima from './reducerClima';

const rootReducer = combineReducers({
    climas: reducerClima
});

export default rootReducer;