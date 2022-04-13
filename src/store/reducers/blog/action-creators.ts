import {
    BlogActionEnum,
    ClearPosts,
    SetBlogAction,
    SetBlogErrorAction,
    SetBlogSuccessAction,
    SetNewPostAction
} from "./types";
import {IPost} from "../../../models/IPost";
import {AppDispatch} from "../../index";
import BlogService from "../../../api/BlogService";

export const BlogActionCreators = {
    setPosts: (): SetBlogAction => ({
        type: BlogActionEnum.SET_POST,
    }),
    setNewPost: (post: IPost): SetNewPostAction => ({
        type: BlogActionEnum.SET_NEW_POST,
        payload: post
    }),
    setPostsSuccess: (posts: IPost[]): SetBlogSuccessAction => ({
        type: BlogActionEnum.SET_POST_SUCCESS,
        payload: posts
    }),
    setPostsError: (error: string): SetBlogErrorAction => ({
        type: BlogActionEnum.SET_POST_ERROR,
        payload: error
    }),
    clearPosts: (): ClearPosts => ({
        type: BlogActionEnum.CLEAR_POST,
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
    addPost: (post: IPost) => async (dispatch: AppDispatch) => {
        try {
            const response = await BlogService.addPost(post)
            dispatch(BlogActionCreators.setNewPost(response.data))
        } catch (e) {
            dispatch(BlogActionCreators.setPostsError('post doesn\'t add'))
        }
    }
}