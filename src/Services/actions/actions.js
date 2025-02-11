import {ADD_TO_CART2,REMOVE_TO_CART2} from "../constants"

export const addtocard = (data) =>{
    console.log("action",data);
    
    return{
        type:ADD_TO_CART2,
        data:data
    }
};

export const removetocard = ()=>{
    return{
        type:REMOVE_TO_CART2
    }
}