import axios from 'axios';

export const FETCHING_SMURF_DATA_START = 'FETCHING_SMURF_DATA_START';
export const FETCHING_SMURF_DATA_SUCCESS = 'FETCHING_SMURF_DATA_SUCCESS';
export const FETCHING_SMURF_DATA_FAILURE = 'FETCHING_SMURF_DATA_FAILURE';

export const ADD_SMURF_DATA_START = 'ADD_SMURF_DATA_START';
export const ADD_SMURF_DATA_SUCCESS = 'ADD_SMURF_DATA_SUCCESS';
export const ADD_SMURF_DATA_FAILURE = 'ADD_SMURF_DATA_FAILURE';


export const getSmurfs = () => dispatch => {
        dispatch({type: FETCHING_SMURF_DATA_START});
        axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res.data)
            dispatch({type: FETCHING_SMURF_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: FETCHING_SMURF_DATA_FAILURE, payload: err.response})
        });
    }

    export const addSmurf = (smurfs) => dispatch => {
        dispatch({type: ADD_SMURF_DATA_START});
        axios
        .post("http://localhost:3333/smurfs", smurfs) 
        .then(res => {
            console.log(res.data)
            dispatch({type: ADD_SMURF_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: ADD_SMURF_DATA_FAILURE, payload: err.response})
        });
    }


// export const addData = () => {
//     return dispatch => {
//         dispatch({type: ADD_SMURF_DATA_SUCCESS});
//         axios
//         .post('http://localhost:3333/smurfs', {
//             name: '',
//             age: [],
//             height: '',
//             id: []
//         })
//         .then(res => {
//             dispatch({type: ADD_SMURF_DATA_SUCCESS, payload: res.data})
//         })
//     }
// };