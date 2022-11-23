export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER"

export const addUser = (payload) => {
    return {
        type: ADD_USER,
        payload
    }
}



export const deleteUser = (payload) => {
    return {
        type: DELETE_USER,
        payload
    }
}



