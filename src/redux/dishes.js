 import * as ActionTypes from './ActionTypes';

//this is the first separated smaller reducer, which only contains one state, DISHES
export const Dishes = (state = {isLoading: true, errMess: null, dishes:[]}, action) => {
    switch (action.type) {
        //...state means that take the original state and create a new state as the original
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes:[]};

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dishes: []};

        default:
            return state;
    }
};