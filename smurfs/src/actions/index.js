import axios from 'axios';

export const FETCHING_DATA_START = 'FETCHING_DATA_START';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE';
export const ADD_DATA_SUCCESS = 'ADD_DATA_SUCCESS';

export const getData = () => {
    return dispatch => {
        dispatch({type: FETCHING_DATA_START});
        axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({type: FETCHING_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: FETCHING_DATA_FAILURE, payload: err.response})
        });
    }
}