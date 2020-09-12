import {createStore} from 'redux'

const initialState = {
    order:[],
    count:0
}

const reducer = (state= initialState, action) =>{
    // [...state.order].map(ele=>console.log('Item: '+ele.name+'; cantidad='+ele.quantity))

    if(action.value){
        const stateItem = state.order.reduce((aux, item) => {
            if(item.id === action.value.id) aux=1;
            return aux
        },0);

        if(action.type==='Agregar_Item'){
            if(!stateItem){
                action.value.quantity=1;
                return {order: state.order.concat(action.value),count: ++state.count}
            }
            return{
                order: state.order.map(ele => {
                    if(ele.id === action.value.id) ++ele.quantity
                    return ele;
                }),
                count: ++state.count
            }
        }else if(action.type==='Eliminar_Item'){
            if(stateItem){
                if(action.value.quantity===1){
                    --action.value.quantity;
                    return {order: state.order.filter(ele=> ele.id !== action.value.id), count: --state.count}
                }
                else if(action.value.quantity>1){
                    return{
                        order: state.order.map(ele=>{
                            if(ele.id === action.value.id) --ele.quantity
                            return ele;
                        }),
                        count: --state.count
                    }
                }
            }
        }
    }    
    return state
}

export default createStore(reducer)