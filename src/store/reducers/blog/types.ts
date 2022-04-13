import {IPost} from "../../../models/IPost";

export interface BlogState {
    posts: IPost[]
    loading: boolean
    error: string;
}

export enum BlogActionEnum {
    SET_POST = "SET_POST",
    SET_POST_SUCCESS = " SET_POSTS_SUCCESS",
    SET_POST_ERROR = "SET_POSTS_ERROR",
    SET_NEW_POST = "SET_NEW_POST",
    CLEAR_POST = "CLEAR_POST"
}

export interface SetBlogAction {
    type: BlogActionEnum.SET_POST;
}

export interface SetNewPostAction {
    type: BlogActionEnum.SET_NEW_POST;
    payload: IPost
}

export interface SetBlogSuccessAction {
    type: BlogActionEnum.SET_POST_SUCCESS;
    payload: IPost[]
}

export interface SetBlogErrorAction {
    type: BlogActionEnum.SET_POST_ERROR;
    payload: string;
}

export interface ClearPosts {
    type: BlogActionEnum.CLEAR_POST;
}


export type BlogAction = SetBlogErrorAction | SetBlogSuccessAction | SetBlogAction | SetNewPostAction | ClearPosts