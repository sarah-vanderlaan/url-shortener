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
        let url = { shortcode: data.slashtag, fullURL: data.destination };
        dispatch({ type: types.SHORTEN_URL_SUCCESS, url });
      },
      err => {
        dispatch({ type: types.API_CALL_FAILURE });
      }
    );
  };
}
