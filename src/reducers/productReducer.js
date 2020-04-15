import {STORE_PRODUCT} from "../types/index";
import initialState from "./initialState";


export default function(state=initialState.product,action)
{
    switch(action.type)
    {
        case STORE_PRODUCT:
            return {
                ...state,
                product:action.payload
            }
        default:
            return state;
    }
}

