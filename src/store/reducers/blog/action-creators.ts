import {
    BlogActionEnum,
    ClearCurrentPost,
    ClearPosts,
    DeletePostAction,
    OnChangePostAction,
    SetBlogAction,
    SetBlogErrorAction,
    SetBlogSuccessAction,
    SetCurrentPostAction,
    SetCurrentPostSuccessAction,
    SetNewPostAction
} from "./types";
import {IPost} from "../../../models/IPost";
import {AppDispatch} from "../../index";
import BlogService from "../../../api/BlogService";
import {NavigateFunction} from "react-router/lib/hooks";

export const BlogActionCreators = {
    setPosts: (): SetBlogAction => ({
        type: BlogActionEnum.SET_POST,
    }),
    setCurrentPost: (): SetCurrentPostAction => ({
        type: BlogActionEnum.SET_CURRENT_POST,
    }),
    setNewPost: (post: IPost): SetNewPostAction => ({
        type: BlogActionEnum.SET_NEW_POST,
        payload: post
    }),
    setPostsSuccess: (posts: IPost[]): SetBlogSuccessAction => ({
        type: BlogActionEnum.SET_POST_SUCCESS,
        payload: posts
    }),
    setCurrentPostSuccess: (post: IPost): SetCurrentPostSuccessAction => ({
        type: BlogActionEnum.SET_CURRENT_POST_SUCCESS,
        payload: post
    }),
    setPostsError: (error: string): SetBlogErrorAction => ({
        type: BlogActionEnum.SET_POST_ERROR,
        payload: error
    }),
    setChangePost: (post: IPost): OnChangePostAction => ({
        type: BlogActionEnum.ON_CHANGE_POST,
        payload: post
    }),
    setDeletePost: (post: IPost): DeletePostAction => ({
        type: BlogActionEnum.DELETE_POST,
        payload: post
    }),
    clearPosts: (): ClearPosts => ({
        type: BlogActionEnum.CLEAR_POST,
    }),
    clearCurrentPost: (): ClearCurrentPost => ({
        type: BlogActionEnum.CLEAR_CURRENT_POST,
    }),
    fetchPosts: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(BlogActionCreators.setPosts())
            const response = await BlogService.getPost()
            dispatch(BlogActionCreators.setPostsSuccess(response.data))
        } catch (e) {
            dispatch(BlogActionCreators.setPostsError('something Error'))
        }
    },
    fetchCurrentPost: (id: number) => async (dispatch: AppDispatch) => {
        try {
            dispatch(BlogActionCreators.setCurrentPost())
            const response = await BlogService.getCurrentPost(id)
            dispatch(BlogActionCreators.setCurrentPostSuccess(response.data))
        } catch (e) {
            dispatch(BlogActionCreators.setPostsError('something Error'))
        }
    },
    addPost: (post: IPost) => async (dispatch: AppDispatch) => {
        try {
            const response = await BlogService.addPost(post)
            dispatch(BlogActionCreators.setNewPost(response.data))
        } catch (e) {
            dispatch(BlogActionCreators.setPostsError('post doesn\'t add'))
        }
    },
    changePost: (post: IPost, navigate: NavigateFunction) => async (dispatch: AppDispatch) => {
        try {
            const response = await BlogService.putPost(post, post.id)
            dispatch(BlogActionCreators.setChangePost(response.data))
            navigate(-1)
        } catch (e) {
            dispatch(BlogActionCreators.setPostsError('post doesn\'t change'))
        }
    },
    deletePost: (id: number, navigate: NavigateFunction) => async (dispatch: AppDispatch) => {
        try {
            const response = await BlogService.deletePost(id)
            dispatch(BlogActionCreators.setDeletePost(response.data))
            navigate(-1)
        } catch (e) {
            dispatch(BlogActionCreators.setPostsError('post doesn\'t change'))
        }
    }
}