import { IAction } from '../../interfaces/iactions';
import { FETCH_POST, LOADING_POST, LOADING_POST_DONE } from './posts.actions';

export interface IPostItem {
  id: string;
  userId: string;
  title: string;
  body: string;
}

export interface IPostState {
  posts: IPostItem[];
  loading?: boolean;
}

const initialState: IPostState = {
  posts: [],
};

function reducer(state: IPostState = initialState, action: IAction): IPostState {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        posts: action.payload as IPostItem[],
      }
    case LOADING_POST:
      return {
        ...state,
        loading: true,
      }
    case LOADING_POST_DONE:
      return {
        ...state,
        loading: false,
      }
    default:
      return {
        ...state,
      }
  }
}

export default reducer;