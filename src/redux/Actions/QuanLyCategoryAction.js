import { quanLyCategoryService } from "../../services/QuanLyCategoryService"
import { message } from 'antd';
import { history } from "../../App";
import { EDIT_CATE, GET_ALL_CATE } from './../Types/QuanLyCategoryType';



export const CreateCategoryAction = (data) => {
    return async dispatch => {
        try {
            let result = await quanLyCategoryService.createCate(data);
            if (result.status === 201) {
                await message.success("Thêm mới thành công!")
                history.push('/admin/category')
            }
            else {
                message.error('Thêm mới thất bại!')
            }
        } catch (error) {
            console.log('error', error.response?.data)
        }
    }
}

export const GetAllCategoryAction = () => {
    return async dispatch => {
        try {
            const result = await quanLyCategoryService.getAllCate();
            if (result.status === 200) {
                dispatch({
                    type: GET_ALL_CATE,
                    dataCate: result.data
                })
            }
        } catch (error) {
            console.log('error', error.response?.data)
        }
    }
}


export const GetDetailFilmAction = (id) => {
    return async dispatch => {
        try {
            let result = await quanLyCategoryService.getDetail(id)
            if (result.status === 200) {
                dispatch({
                    type: EDIT_CATE,
                    dataDetail: result.data
                })
            }
        } catch (error) {
            console.log('error', error.response?.data)

        }
    }
}

export const EditCateAction = (id, data) => {
    return async dispatch => {
        try {
            let result = await quanLyCategoryService.editCate(id, data);
            if (result.status === 200) {
                message.success("Cập nhật thông tin thành công!")
                history.push('/admin/category')
                dispatch(GetAllCategoryAction())
            }
            else {
                message.warning("Cập nhật thông tin thất bại!")
            }

        } catch (error) {
            console.log('error', error.response?.data)

        }
    }
}

export const DeleteCateAction = (id) => {
    return async dispatch => {
        try {
            const result = await quanLyCategoryService.delCate(id);
            if (result.status === 200) {
                message.success('Xóa thành công!')
                dispatch(GetAllCategoryAction())
            }
            else {
                message.warning("Xóa thất bại!")
            }


        } catch (error) {
            console.log('error', error.response?.data)
        }
    }
}
