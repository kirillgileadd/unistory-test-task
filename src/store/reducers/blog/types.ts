import {IPost} from "../../../models/IPost";

export interface BlogState {
    posts: IPost[]
    loading: boolean
    error: string;
    currentPost: IPost | null
}

export enum BlogActionEnum {
    SET_POST = "SET_POST",
    SET_POST_SUCCESS = " SET_POSTS_SUCCESS",
    SET_CURRENT_POST_SUCCESS = "SET_CURRENT_POST_SUCCESS",
    SET_POST_ERROR = "SET_POSTS_ERROR",
    SET_NEW_POST = "SET_NEW_POST",
    ON_CHANGE_POST = "ON_CHANGE_POST",
    DELETE_POST = "DELETE_POST",
    CLEAR_POST = "CLEAR_POST",
    CLEAR_CURRENT_POST = "CLEAR_CURRENT_POST"
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

export interface SetCurrentPostSuccessAction {
    type: BlogActionEnum.SET_CURRENT_POST_SUCCESS;
    payload: IPost
}

export interface SetBlogErrorAction {
    type: BlogActionEnum.SET_POST_ERROR;
    payload: string;
}

export interface OnChangePostAction {
    type: BlogActionEnum.ON_CHANGE_POST;
    payload: IPost;
}

export interface DeletePostAction {
    type: BlogActionEnum.DELETE_POST;
    payload: IPost;
}

export interface ClearPosts {
    type: BlogActionEnum.CLEAR_POST;
}

export interface ClearCurrentPost {
    type: BlogActionEnum.CLEAR_CURRENT_POST;
}


export type BlogAction = SetBlogErrorAction
    | SetBlogSuccessAction
    | SetBlogAction
    | SetNewPostAction
    | ClearPosts
    | SetCurrentPostSuccessAction
    | ClearCurrentPost
    | OnChangePostAction
    | DeletePostAction