export const plusElements = (array, key) =>{
    return array.reduce((aux, ele)=>{
        aux = aux + ele[key];
        return aux
    },0)
}

export const orderState = (array, value, key) =>{
    return array.reduce((aux, ele) => {
        if(ele[key] === value[key]) aux=1;
        return aux
    },0);
}

export const deleteElement = (array, value, key, key1) =>{
    value[key1] = 0;
    return array.filter(ele=> ele[key] !== value[key])
}

export const addElement = (array, value, key1, key2, key3) =>{
    value[key1] = 1;
    value[key3] = value[key2];
    return array.concat(value)
}

export const increaseElements = (array, value, key, key1, key2, key3)=>{
    return array.map(ele => {
        if(ele[key] === value[key]) {
            ++ele[key1];
            ele[key3] = ele[key1]*ele[key2];
        }
        return ele;
    })
}

export const decreaseElements = (array, value, key, key1, key2, key3)=>{
    return array.map(ele => {
        if(ele[key] === value[key]) {
            --ele[key1];
            ele[key3] = ele[key1]*ele[key2];
        }
        return ele;
    })
}