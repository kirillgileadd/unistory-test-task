import {IPost} from "../../../models/IPost";

export interface BlogState {
    posts: IPost[]
    loading: boolean
    error: string;
}

export enum BlogActionEnum {
    SET_POST = "SET_POSTS",
    SET_POST_SUCCESS = " SET_POSTS_SUCCESS",
    SET_POST_ERROR = "SET_POSTS_ERROR"
}

export interface SetBlogAction {
    type: BlogActionEnum.SET_POST;
}

export interface SetBlogSuccessAction {
    type: BlogActionEnum.SET_POST_SUCCESS;
    payload: IPost[]
}

export interface SetBlogErrorAction {
    type: BlogActionEnum.SET_POST_ERROR;
    payload: string;
}


export type BlogAction = SetBlogErrorAction | SetBlogSuccessAction | SetBlogAction