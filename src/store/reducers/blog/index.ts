import {BlogState, BlogAction, BlogActionEnum} from "./types";
import {IPost} from "../../../models/IPost";

const initialState: BlogState = {
    posts: [],
    error: '',
    loading: false,
    postLoading: false,
    currentPost: {} as IPost,
}

export default function EventReducer(state = initialState, action: BlogAction): BlogState {
    switch (action.type) {
        case BlogActionEnum.SET_POST:
            return {...state, loading: true}
        case BlogActionEnum.SET_CURRENT_POST:
            return {...state, postLoading: true}
        case BlogActionEnum.SET_POST_SUCCESS:
            return {...state, posts: action.payload, loading: false}
        case BlogActionEnum.SET_CURRENT_POST_SUCCESS:
            return {...state, currentPost: action.payload, postLoading: false}
        case BlogActionEnum.SET_POST_ERROR:
            return {...state, error: action.payload, loading: false}
        case BlogActionEnum.SET_NEW_POST:
            return {...state, posts: [...state.posts, action.payload]}
        case BlogActionEnum.CLEAR_POST:
            return {...state, posts: []}
        case BlogActionEnum.CLEAR_CURRENT_POST:
            return {...state, currentPost: {title: '', body: '', id: 0}}
        default:
            return state;
    }
}