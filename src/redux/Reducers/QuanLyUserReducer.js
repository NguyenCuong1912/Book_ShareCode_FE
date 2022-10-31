import { GET_LIST_USER, SET_LOGIN } from "../Types/QuanLyUserType"



const initialState = {
    userLogin: []
}


export const QuanLyUserReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_LOGIN: {
            const { dataSignIn } = action;
            return { ...state, userLogin: dataSignIn }
        }

        case GET_LIST_USER: {
            state.userLogin = action.dataUser;
            return { ...state }
        }
        default:
            return state
    }
}
