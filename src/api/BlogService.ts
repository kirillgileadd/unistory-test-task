import {IPost} from "../models/IPost";
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

export default class BlogService {
    private static config: AxiosRequestConfig = {
        baseURL: 'https://6256ecc5e07d2c9a670f94ca.mockapi.io/posts',
    };
    private static instance: AxiosInstance = axios.create(this.config);

    static async getPost(): Promise<AxiosResponse<IPost[]>> {
        return this.instance.get(`/`)
    }

    static async addPost(post: IPost): Promise<AxiosResponse<IPost>> {
        return this.instance.post<IPost>('/', post)
    }

    static async deletePost(id: number): Promise<AxiosResponse<IPost>> {
        return this.instance.delete<IPost>(`/${id}`)
    }

    static async putPost(post: IPost, id: number): Promise<AxiosResponse<IPost>> {
        return this.instance.put<IPost>(`/${id}`, post)
    }

    static async getCurrentPost(id: number): Promise<AxiosResponse<IPost>> {
        return this.instance.get<IPost>(`/${id}`)
    }
}