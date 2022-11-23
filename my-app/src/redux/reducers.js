import { ADD_USER, DELETE_USER } from "./actions";


const initialState = {
    user:{}
}
export const roortReducer = (state= initialState, action) =>{

    switch (action.type) {
        case ADD_USER: return {...state, user: action.payload}
            
        case DELETE_USER: return {...state, user: action.payload}
    
        default: return state;
    }

}