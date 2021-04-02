import { DISHES } from '../shared/dishes';

//this is the first separated smaller reducer, which only contains one state, DISHES
export const Dishes = (state = DISHES, action) => {
    switch (action.type) {
        default:
            return state;
    }
};