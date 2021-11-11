import {
    FETCH_AUTHORS_REQUEST,
    FETCH_AUTHORS_SUCCESS,
    FETCH_AUTHORS_FAILURE,
} from '../actions/authorActions';

const initialState = {
    fetchLoading: false,
    authors: [],
};

const authorReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AUTHORS_REQUEST:
            return { ...state, fetchLoading: true };
        case FETCH_AUTHORS_SUCCESS:
            return { ...state, fetchLoading: false, authors: action.payload };
        case FETCH_AUTHORS_FAILURE:
            return { ...state, fetchLoading: false };
        default:
            return state;
    }
};

export default authorReducer;