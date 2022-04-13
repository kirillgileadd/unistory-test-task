import {IPost} from "../models/IPost";
import axios, {AxiosResponse} from "axios";

export default class BlogService {
    static async getPost(): Promise<AxiosResponse<IPost[]>> {
        return axios.get<IPost[]>('https://6256ecc5e07d2c9a670f94ca.mockapi.io/posts')
    }
}