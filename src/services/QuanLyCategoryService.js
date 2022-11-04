import { baseService } from "./baseService";

export class QuanLyCategoryService extends baseService {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    createCate = (data) => {
        return this.post(`api/category`, data)
    }

    getAllCate = () => {
        return this.get(`api/category`)
    }

    delCate = (id) => {
        return this.put(`api/category/${id}`)
    }

    editCate = (id, data) => {
        return this.put(`api/category/edit/${id}`, data)
    }

    getDetail = (id) => {
        return this.get(`api/category/${id}`)
    }
}


export const quanLyCategoryService = new QuanLyCategoryService();