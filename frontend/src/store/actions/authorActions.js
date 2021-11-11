import axiosApi from '../../axiosApi';

export const FETCH_AUTHORS_REQUEST = 'FETCH_AUTHORS_REQUEST';
export const FETCH_AUTHORS_SUCCESS = 'FETCH_AUTHORS_SUCCESS';
export const FETCH_AUTHORS_FAILURE = 'FETCH_AUTHORS_FAILURE';

export const fetchAuthorsRequest = () => ({type: FETCH_AUTHORS_REQUEST});
export const fetchAuthorsSuccess = authors => ({type: FETCH_AUTHORS_SUCCESS, payload: authors});
export const fetchAuthorsFailure = () => ({type: FETCH_AUTHORS_FAILURE});

export const fetchAuthors = () => {
    return async dispatch => {
      try {
        dispatch(fetchAuthorsRequest());
        const response = await axiosApi.get('/artists');
        dispatch(fetchAuthorsSuccess(response.data));
      } catch (e) {
        dispatch(fetchAuthorsFailure());
      }
    };
  };