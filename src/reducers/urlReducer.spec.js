import * as types from '../actions/types';
import reducer from './urlReducer';
import expect from 'expect';

describe('URL Reducer', () => {
  const getInitialState = () => {
    return {
      urls: [],
      isFetching: false
    };
  };

  it('should set initial state by default', () => {
    const action = { type: 'doesNotExist' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle SHORTEN_URL_REQUEST', () => {
    const action = { type: types.SHORTEN_URL_REQUEST };
    const expected = Object.assign(getInitialState(), { isFetching: true });

    expect(reducer(getInitialState(), action)).toEqual(expected);
  });

  it('should handle SHORTEN_URL_SUCCESS', () => {
    let url = "test.com";
    const action = { type: types.SHORTEN_URL_SUCCESS, url };

    let urls = [url];

    expect(reducer(getInitialState(), action).urls).toEqual(urls);
  });

  it('should handle CLEAR_URLS', () => {
    const action = { type: types.CLEAR_URLS };
    const state = {
      urls: ["test.com"],
      isFetching: false
    };
    expect(reducer(state, action).urls).toEqual([]);
  });

  it('should handle API_CALL_FAILURE', () => {
    const action = { type: types.API_CALL_FAILURE };
    const state = {
      urls: ["test.com"],
      isFetching: true
    };
    expect(reducer(state, action).isFetching).toEqual(false);
  });
});
