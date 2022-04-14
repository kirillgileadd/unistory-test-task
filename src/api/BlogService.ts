import {IPost} from "../models/IPost";
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

export default class BlogService {
    private static config: AxiosRequestConfig = {
        baseURL: 'https://6256ecc5e07d2c9a670f94ca.mockapi.io/posts',
    };
    private static client: AxiosInstance = axios.create(this.config);

    static async getPost(): Promise<AxiosResponse<IPost[]>> {
        return this.client.get(`/`)
    }
    static async addPost(post: IPost): Promise<AxiosResponse<IPost>> {
        return this.client.post<IPost>('/', post)
    }
    static async deletePost(id: number): Promise<AxiosResponse<IPost>> {
        return this.client.delete<IPost>(`/${id}`)
    }
    static async putPost(post: IPost, id: number): Promise<AxiosResponse<IPost>> {
        return this.client.put<IPost>(`/${id}`, post)
    }
    static async getCurrentPost(id: number): Promise<AxiosResponse<IPost>> {
        return this.client.get<IPost>(`/${id}`)
    }
}