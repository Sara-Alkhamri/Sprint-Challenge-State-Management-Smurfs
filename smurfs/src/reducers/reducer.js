
import {FETCHING_SMURF_DATA_START,
        FETCHING_SMURF_DATA_SUCCESS,
        FETCHING_SMURF_DATA_FAILURE, 
        ADD_SMURF_DATA_START,
        ADD_SMURF_DATA_SUCCESS,
        ADD_SMURF_DATA_FAILURE, 
        } from '../actions';


const initialState = {
    smurfs: [],
    isFetching: false,
    error: '', 
    addingSmurf: false
};

export const reducer = (state = initialState, action) => {
    console.log('Action is:', action)
    switch(action.type) {
        case FETCHING_SMURF_DATA_START:
        return {
            ...state,
            isFetching: true,
            error: ''
        };
       
        case FETCHING_SMURF_DATA_SUCCESS:
        return {
            ...state,
            smurfs: action.payload,
            isFetching: false,
            error: ''
        };
        case FETCHING_SMURF_DATA_FAILURE:
        return {
            ...state,
            isFetching:  false,
            error: 'Error'
        };
        case ADD_SMURF_DATA_START:
        return {
            ...state,
            addingSmurf: true,
            error: ''
        };
        case ADD_SMURF_DATA_SUCCESS:
        return {
            ...state,
            smurfs: action.payload,
            addingSmurf: false,
            error: ''
        };
        case ADD_SMURF_DATA_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: ''
        };
        default: 
            return state;
    }
}
