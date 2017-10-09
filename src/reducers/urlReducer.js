import * as types from '../actions/types';

let initialState = {
  urls: [],
  isFetching: false
};

export default function urlReducer(state = initialState, action) {
  switch(action.type) {
    case types.SHORTEN_URL_REQUEST:
      return Object.assign({}, state, { isFetching: true });
    case types.SHORTEN_URL_SUCCESS: {
      let urls = state.urls;
      if(action.url) urls = [action.url, ...state.urls];
      return Object.assign({}, state, { urls, isFetching: false });
    }
    case types.API_CALL_FAILURE:
      return Object.assign({}, state, { isFetching: false });
    case types.CLEAR_URLS:
      return Object.assign({}, state, { urls: [] });
    default:
      return state;
  }
}
