import {createStore} from 'redux'
import {plusElements, orderState, deleteElement, addElement, increaseElements, decreaseElements} from '../functions/funtions'

const initialState = {
    order:[],
    total:0,
    count:0
}

const reducer = (state= initialState, action) =>{

    const order = state.order;
    const value = action.value;
    const type = action.type;
    let newOrder = [];
    
    if(value){
        const stateItem = orderState( order, value, "id");

        if(type==='Agregar_Item'){
            if(!stateItem){
                newOrder = addElement(order, value, "quantity", "price", "subTotal");
            }
            else{
                newOrder = increaseElements(order, value, "id", "quantity", "price", "subTotal");
            }
        }else if(type==='Eliminar_Item'){
            if(stateItem){
                if(value.quantity===1){
                    newOrder = deleteElement(order, value, "id", "quantity");
                }
                else if(value.quantity>1){
                    newOrder = decreaseElements(order, value, "id", "quantity", "price", "subTotal");
                }
            }
        }else if(type==='Eliminar_Producto'){
            if(stateItem){
                newOrder = deleteElement(order, value, "id", "quantity");
            }
        }else if(type==='Calcular_Pedido'){
            return{
                ...state,
                total: plusElements(order, "subTotal")
            }
        }

        return{
            order: newOrder,
            count: plusElements(newOrder, "quantity"),
            total: plusElements(newOrder, "subTotal")
        }
    }    
    return state
}

export default createStore(reducer)