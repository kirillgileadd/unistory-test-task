import {BlogState, BlogAction, BlogActionEnum} from "./types";

const initialState: BlogState = {
    posts: [],
    error: '',
    loading: false
}

export default function EventReducer(state = initialState, action: BlogAction): BlogState {
    switch (action.type) {
        case BlogActionEnum.SET_POST:
            return {...state, loading: true}
        case BlogActionEnum.SET_POST_SUCCESS:
            return {...state, posts: action.payload, loading: false}
        case BlogActionEnum.SET_POST_ERROR:
            return {...state, error: action.payload, loading: false}
        case BlogActionEnum.SET_NEW_POST:
            return {...state, posts: [...state.posts, action.payload]}
        case BlogActionEnum.CLEAR_POST:
            return {...state, posts: []}
        default:
            return state;
    }
}