import { EDIT_CATE, GET_ALL_CATE } from "../Types/QuanLyCategoryType"




const initialState = {
    lstCate: [],
    editCate: {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export const QuanLyCategoryReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_CATE: {
            state.lstCate = action.dataCate
            return { ...state }
        }

        case EDIT_CATE: {
            state.editCate = action.dataDetail
            return { ...state }
        }

        default:
            return state
    }
}
