import { LEADERS } from '../shared/leaders';
import * as ActionTypes from './ActionTypes';

//this is the fourth separated smaller reducer, which only contains one state, LEADERS
export const Leaders = (state = {isLoading: true, errMess: null, leaders:[]}, action) => {
    switch (action.type){
        case ActionTypes.ADD_LEADERS:
            return {...state, isLoading: false, errMess: null, leaders: action.payload};

        case ActionTypes.LEADERS_LOADING:
            return {...state, isLoading: true, errMess: null, leaders: []};

        case ActionTypes.LEADERS_FAILED:
            return {...state, isLoading: false, errMess:action.payload, leaders: []};
            
        default:
            return state;
    }
};