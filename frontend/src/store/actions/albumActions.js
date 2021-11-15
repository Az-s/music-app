import axiosApi from "../../axiosApi";

export const FETCH_ALBUMS_REQUEST = 'FETCH_ALBUMS_REQUEST';
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUMS_FAILURE = 'FETCH_ALBUMS_FAILURE';

export const FETCH_ALBUM_REQUEST = 'FETCH_ALBUM_REQUEST';
export const FETCH_ALBUM_SUCCESS = 'FETCH_ALBUM_SUCCESS';
export const FETCH_ALBUM_FAILURE = 'FETCH_ALBUM_FAILURE';

export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_FAILURE = 'FETCH_TRACKS_FAILURE';

export const FETCH_TRACKSBYARTIST_SUCCESS = 'FETCH_TRACKSBYARTIST_SUCCESS';
export const FETCH_TRACKSBYARTIST_FAILURE = 'FETCH_TRACKSBYARTIST_FAILURE';

export const FETCH_TRACKSBYALBUM_SUCCESS = 'FETCH_TRACKSBYALBUM_SUCCESS';
export const FETCH_TRACKSBYALBUM_FAILURE = 'FETCH_TRACKSBYALBUM_FAILURE';

export const fetchALbumsRequest = () => ({ type: FETCH_ALBUMS_REQUEST });
export const fetchALbumsSuccess = albums => ({ type: FETCH_ALBUMS_SUCCESS, payload: albums });
export const fetchALbumsFailure = () => ({ type: FETCH_ALBUMS_FAILURE });

export const fetchAlbumRequest = () => ({ type: FETCH_ALBUM_REQUEST });
export const fetchAlbumSuccess = album => ({ type: FETCH_ALBUM_SUCCESS, payload: album });
export const fetchAlbumFailure = () => ({ type: FETCH_ALBUM_FAILURE });

export const fetchTracksSuccess = tracks => ({ type: FETCH_TRACKS_SUCCESS, tracks });
export const fetchTracksFailure = () => ({ type: FETCH_TRACKS_FAILURE });

export const fetchTracksByArtistSuccess = tracks => ({ type: FETCH_TRACKSBYARTIST_SUCCESS, tracks });
export const fetchTracksByArtistFailure = () => ({ type: FETCH_TRACKSBYARTIST_FAILURE });

export const fetchTracksByAlbumSuccess = tracks => ({ type: FETCH_TRACKSBYALBUM_SUCCESS, tracks });
export const fetchTracksByAlbumFailure = () => ({ type: FETCH_TRACKSBYALBUM_FAILURE });

export const fetchAlbums = (artistId) => {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchALbumsRequest());
            const response = await axiosApi.get('/albums?artist=' + artistId);
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
            const response = await axiosApi.get('/albums/' + id);
            dispatch(fetchAlbumSuccess(response.data));
        } catch (error) {
            dispatch(fetchAlbumFailure());
        }
    };
};

export const getTracks = () => {
    return async dispatch => {
        try {
            const response = axiosApi.get('/tracks');
            dispatch(fetchTracksSuccess(response.data));
        } catch (error) {
            dispatch(fetchAlbumFailure());
        }
    };
};

export const getTracksByArtist = artistId => {
    return async dispatch => {
        try {
            const response = axiosApi.get('/tracks?artist=' + artistId);
            dispatch(fetchTracksByArtistSuccess(response.data));
        } catch (error) {
            dispatch(fetchAlbumFailure());
        }
    };
};

export const getTracksByAlbum = (albumId) => {
    return async dispatch => {
        try {
            const response = axiosApi.get('/tracks?album=' + albumId);
            dispatch(fetchTracksByArtistSuccess(response.data));
        } catch (error) {
            dispatch(fetchAlbumFailure());
        }
    };
};