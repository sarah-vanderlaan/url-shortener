import * as types from './types';

export function requestShortcode() {
  return { type: types.SHORTEN_URL_REQUEST };
}

export function clearURLs(){
  return { type: types.CLEAR_URLS };
}

export function shortenURL(urlToShorten) {
  return dispatch => {
    dispatch(requestShortcode());
    return fetch("/shorten", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url: urlToShorten })
    })
    .then(res => res.json())
    .then(
      data => {
        //Temporary way to handle all errors returned by the API
        //Ideally, should handle different types of errors accordingly
        if(data.errors) {
          dispatch({ type: types.API_CALL_FAILURE });
        } else {
          let url = { shortUrl: data.shortUrl, fullURL: data.destination };
          dispatch({ type: types.SHORTEN_URL_SUCCESS, url });
        }
      },
      err => {
        dispatch({ type: types.API_CALL_FAILURE });
      }
    );
  };
}
