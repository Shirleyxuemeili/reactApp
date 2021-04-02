import { COMMENTS } from '../shared/comments';

//this is the second separated smaller reducer, which only contains one state, COMMENTS
export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        default:
            return state;
    }
};