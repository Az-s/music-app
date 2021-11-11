import axiosApi from "../../axiosApi";

export const FETCH_ALBUMS_REQUEST = 'FETCH_ALBUMS_REQUEST';
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUMS_FAILURE = 'FETCH_ALBUMS_FAILURE';

export const FETCH_ALBUM_REQUEST = 'FETCH_ALBUM_REQUEST';
export const FETCH_ALBUM_SUCCESS = 'FETCH_ALBUM_SUCCESS';
export const FETCH_ALBUM_FAILURE = 'FETCH_ALBUM_FAILURE';

export const fetchALbumsRequest = () => ({ type: FETCH_ALBUMS_REQUEST });
export const fetchALbumsSuccess = albums => ({ type: FETCH_ALBUMS_SUCCESS, payload: albums });
export const fetchALbumsFailure = () => ({ type: FETCH_ALBUMS_FAILURE });

export const fetchAlbumRequest = () => ({ type: FETCH_ALBUM_REQUEST });
export const fetchAlbumSuccess = album => ({ type: FETCH_ALBUM_SUCCESS, payload: album });
export const fetchAlbumFailure = () => ({ type: FETCH_ALBUM_FAILURE });

export const fetchAlbums = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchALbumsRequest());
            const response = await axiosApi.get('/albums');
            dispatch(fetchALbumsSuccess(response.data));
        } catch (error) {
            dispatch(fetchALbumsFailure());
        }
    };
};

export const fetchAlbum = id => {
    return async dispatch => {
        try {
            dispatch(fetchAlbumRequest());
            const response = await axiosApi.get('/album/' + id);
            dispatch(fetchAlbumSuccess(response.data));
        } catch (e) {
            dispatch(fetchAlbumFailure());
        }
    };
};