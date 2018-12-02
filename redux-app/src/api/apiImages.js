import {createStore} from 'redux'

// función que determinase realizarà dado una acción 
function apiImage  (state=[],action)
{   
    switch(action.type)
    {
        case 'ADD_IMAGE':
            return state.concat(action.image);
        default:
            return state;
    }
}

// Creamos nuestro store 
let storeImages = createStore(apiImage,[])

storeImages.getState()

const action =
{
    type:'ADD_IMAGE',
    image:
    {

    }
}
storeImages.dispatch(action)

exports.module = apiImage;