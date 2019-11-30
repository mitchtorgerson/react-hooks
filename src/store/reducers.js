import { combineReducers } from 'redux';

import blog from './Blog/Reducer';

const rootReducer = combineReducers({
    blog,
});

export default rootReducer;
