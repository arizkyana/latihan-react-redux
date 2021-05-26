import { Dispatch } from "redux";
import { IAction } from "../../interfaces/iactions";
import { IPostItem } from "./posts.reducer";

export const FETCH_POST = 'FETCH_POST';
export const LOADING_POST = 'LOADING_POST';
export const LOADING_POST_DONE = 'LOADING_POST_DONE';

export const fetchPost = () => async (dispatch: Dispatch) => {
  dispatch(fetchPostLoadingAction(true));
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'get' });
  const data = await response.json();
  dispatch(fetchPostAction(data));
  dispatch(fetchPostLoadingAction(false));
}

function fetchPostLoadingAction(loading: boolean): IAction {
  return {
    type: loading ? LOADING_POST : LOADING_POST_DONE,
  }
}

function fetchPostAction(payload: IPostItem[]): IAction {
  return {
    type: FETCH_POST,
    payload,
  }
}