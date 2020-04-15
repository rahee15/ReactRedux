import {STORE_PRODUCT} from "../types";

export function storeProduct(product){
    return function(dispatch){
        dispatch({
            type:STORE_PRODUCT,
            payload:product
        })
    }
}