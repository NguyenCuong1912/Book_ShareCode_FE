import { baseService } from "./baseService";

export class QuanLyUserService extends baseService {

    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    signUp = (dataSignUp) => {
        return this.post(`api/account/signUp`, dataSignUp)
    }

    signIn = (dataSignIn) => {
        return this.post(`api/account/login`, dataSignIn)
    }

    getListUser = () => {
        return this.get(`api/account`)
    }

    delUser = (id) => {
        return this.put(`api/account/${id}`)
    }

}


export const quanLyUserService = new QuanLyUserService();