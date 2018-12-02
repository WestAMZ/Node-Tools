import {createStore} from 'redux'

function apiTags(state=[],action)
{
    switch(action.type)
    {
        case'ADD_TAG':
            return state.concat(action.tag);
        default:
            return state;
    }
}

let storeTags = createStore(apiTags,[]);
/*
    Exportamos storageTags donde para realizar una
    operacion pasaremos un objeto con type = a la accion
    y para recuperar lo almacenado usaremos getState

*/
exports.module = storeTags;