import { combineReducers } from 'redux';
import PostReducer from '../containers/posts/posts.reducer';

const reducers = combineReducers({
  post: PostReducer,
});

export default reducers;