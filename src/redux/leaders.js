import { LEADERS } from '../shared/leaders';

//this is the fourth separated smaller reducer, which only contains one state, LEADERS
export const Leaders = (state = LEADERS, action) => {
    switch (action.type){
        default:
            return state;
    }
};