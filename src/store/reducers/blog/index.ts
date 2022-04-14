import {BlogAction, BlogActionEnum, BlogState} from "./types";

const initialState: BlogState = {
    posts: [],
    error: '',
    loading: false,
    currentPost:  null,
}

export default function EventReducer(state = initialState, action: BlogAction): BlogState {
    switch (action.type) {
        case BlogActionEnum.SET_POST:
            return {...state, loading: true}
        case BlogActionEnum.SET_POST_SUCCESS:
            return {...state, posts: action.payload, loading: false}
        case BlogActionEnum.SET_CURRENT_POST_SUCCESS:
            return {...state, currentPost: action.payload}
        case BlogActionEnum.SET_POST_ERROR:
            return {...state, error: action.payload, loading: false}
        case BlogActionEnum.SET_NEW_POST:
            return {...state, posts: [...state.posts, action.payload]}
        case BlogActionEnum.ON_CHANGE_POST:
            return {
                ...state, posts: state.posts.map(post => {
                    if (post.id === action.payload.id) {
                        return {
                            ...action.payload,
                        }
                    } else {
                        return {
                            ...post
                        }
                    }
                })
            }
        case BlogActionEnum.CLEAR_POST:
            return {...state, posts: []}
        case BlogActionEnum.CLEAR_CURRENT_POST:
            return {...state, currentPost: null}
        default:
            return state;
    }
}