import {BlogActionEnum, SetBlogAction, SetBlogErrorAction, SetBlogSuccessAction} from "./types";
import {IPost} from "../../../models/IPost";
import {AppDispatch} from "../../index";
import BlogService from "../../../api/BlogService";

export const BlogActionCreators = {
    setPosts: (): SetBlogAction => ({
        type: BlogActionEnum.SET_POST,
    }),
    setPostsSuccess: (posts: IPost[]): SetBlogSuccessAction => ({
        type: BlogActionEnum.SET_POST_SUCCESS,
        payload: posts
    }),
    setPostsError: (error: string): SetBlogErrorAction => ({
        type: BlogActionEnum.SET_POST_ERROR,
        payload: error
    }),
    fetchPosts: () => async (dispatch: AppDispatch) => {
        try {
            BlogActionCreators.setPosts()
            const response = await BlogService.getPost()
            dispatch(BlogActionCreators.setPostsSuccess(response.data))
        } catch (e) {
            dispatch(BlogActionCreators.setPostsError('something Error'))
        }
    }
}