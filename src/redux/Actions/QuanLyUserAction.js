import { quanLyUserService } from "../../services/QuanLyUserService";
import { history } from '../../App'
import { message } from 'antd'
import { GET_LIST_USER, SET_LOGIN } from "../Types/QuanLyUserType";

export const RegisterAction = (dataSignUp) => {
    return async dispatch => {
        try {
            const result = await quanLyUserService.signUp(dataSignUp);
            if (result.status === 201) {
                await message.success("Đăng ký tài khoản thành công!")
                history.push('/login')
            }
            else {
                message.error("Đăng ký thất bại!")
            }

        } catch (error) {
            console.log('error', error.response?.data)
        }
    }
}



export const LoginAction = (dataSignIn) => {
    return async dispatch => {
        try {
            const result = await quanLyUserService.signIn(dataSignIn);
            if (result.status === 200) {
                dispatch({
                    type: SET_LOGIN,
                    dataSignIn: result.data
                })
                if (result.data.typeAccount === "ADMIN") {
                    await message.success("Bạn đã đăng nhập tài khoản admin!")
                    history.push('/admin/account')
                }
                else {
                    await message.success("Đăng nhập thành công!")
                    history.push('/')
                }

            }
        } catch (error) {
            console.log('error', error.response?.data)
        }
    }
}

export const GetListUserAction = () => {
    return async dispatch => {
        try {
            const result = await quanLyUserService.getListUser();
            if (result.status === 200) {
                dispatch({
                    type: GET_LIST_USER,
                    dataUser: result.data
                })
            }
        } catch (error) {
            console.log('error', error.response?.data)

        }
    }
}

export const DeleteUser = (id) => {
    return async dispatch => {
        try {
            const result = await quanLyUserService.delUser(id);
            if (result.status === 200) {
                message.success('Xóa thành công!')
                dispatch(GetListUserAction())
            }
            else {
                message.warning('Xóa thất bại!')
            }

        } catch (error) {
            console.log('error', error.response?.data)

        }
    }
}