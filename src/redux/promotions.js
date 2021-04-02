import { PROMOTIONS } from '../shared/promotions';

//this is the third separated smaller reducer, which only contains one state, PROMOTIONS
export const Promotions = (state = PROMOTIONS, action) => {
    switch (action.type) {
        default:
            return state;
    }
};