import * as actionTypes from "./actionTypes";
import actions from "./actions";

export default (state =[] , action) => {
    switch (action.type) {
        case actionTypes.SET_IMAGES:{
            return Object.assign({} , state , {
                images:action.images
            })
        }
        default:
            return state;
    }
}