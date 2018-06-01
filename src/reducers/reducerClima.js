//console.log('y accion', accion);
// agregar al estado existente no reemplazar completo  (mutar)
import {FETCH_CLIMA} from '../acciones/clima';
export default function(state=[], accion) {
    switch(accion.type) {
        case FETCH_CLIMA:
        return [ accion.objeto.data, ...state ];
    }
    return state;
}