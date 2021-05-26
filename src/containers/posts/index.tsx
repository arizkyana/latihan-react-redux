import { Reducer, StateFromReducersMapObject } from 'redux';
import { connect } from 'react-redux';
import PostContainer from './posts';
import {
  fetchPost,
} from './posts.actions';
import { IPostState } from './posts.reducer';
import { IAppState } from '../../interfaces/iapp.state';

const mapStateToProps = (state: IAppState): IPostState => ({
  posts: state.post.posts,
  loading: state.post.loading,
});

export default connect(mapStateToProps, {
  fetchPost,
})(PostContainer);
