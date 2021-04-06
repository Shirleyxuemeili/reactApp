import * as ActionTypes from './ActionTypes';
//This is a reducer that only contains one state, comments

export const Comments = (state = {errMess: null, comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            
            //comment.date = new Date().toISOString();
            return {...state, comments: state.comments.concat(comment)};

        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, errMess: null, comments:action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, comments: []};

        default:
          return state;
      }
};