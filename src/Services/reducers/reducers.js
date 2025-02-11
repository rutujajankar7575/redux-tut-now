// first reducer
import {ADD_TO_CART2,REMOVE_TO_CART2} from '../constants'
const initialState ={
    cardData : []
}
export default function CardItem(state=[],action){
    // console.log("Data in reducer",action.data);
    
    switch(action.type){
        case ADD_TO_CART2:
            return[
                ...state,
                {cardData:action.data}
            ]
            break;

        case REMOVE_TO_CART2:
            // The pop() method removes (pops) the last element of an array. The pop() method changes the original array.
            state.pop()
            return[
                ...state
            ]
        default:
            return state
    }
}
