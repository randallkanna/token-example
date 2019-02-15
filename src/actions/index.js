import axios from "axios";

export const FETCH_TOKENS = "FETCH_TOKENS";

export function fetchTokens() {
  const url = 'https://roll-76f98.firebaseio.com/tokens.json';
  var tokens = [];
  return fetch(url, {
    method: 'GET'
  }).then((resp) => {
    resp.json().then((results) => {
      // note
      // firebase returns objects which isn't ideal to iterate in react obviously
      // so I'm just going to iterate over and push them into an array
      // preferably I would interact with firebase directly or just get a proper payload returned
      for (let [key, value] of Object.entries(results)) {
        tokens.push({
          key: key,
          value,
        })
      }

      return tokens;
    });

    return {
      type: FETCH_TOKENS,
      payload: tokens
    }
  })
}
