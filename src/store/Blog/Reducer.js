import { Actions } from './Actions';
import { INITIAL_STATE } from './InitialState';

const ACTION_HANDLERS = {
    [Actions.GET_BLOG_DATA_START]: (state, action) => {
        const tempState = Object.assign({}, state);
        tempState.gettingBlogData = true;
        return Object.assign({}, state, tempState);
    },

    [Actions.GET_BLOG_DATA]: (state, action) => {
        const tempState = Object.assign({}, state);
        tempState.blogData = action.blogData;
        tempState.gettingBlogData = false;
        tempState.userIdList = [...new Set(tempState.blogData.map(a => a.userId))];
        return Object.assign({}, state, tempState);
    },

    [Actions.SET_USER]: (state, action) => {
        const tempState = Object.assign({}, state);
        tempState.userId = action.userId;
        return Object.assign({}, state, tempState);
    }
};

export default function reduce(state, action) {
    state = state || INITIAL_STATE;
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
