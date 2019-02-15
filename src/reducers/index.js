import { combineReducers } from "redux";
import TokenReducer from "./token_reducer";

const rootReducer = combineReducers({
  tokens: TokenReducer
});

export default rootReducer;


// export const getTokens() {
//   return fetch('https://roll-76f98.firebaseio.com/tokens.json', {
//     method: 'GET',
//     dataType : "json",
//   }).then((response) => {
//     response.json().then((results) => {
//       var tokens = [];
//       // note
//       // firebase returns objects which isn't ideal to iterate in react obviously
//       // so I'm just going to iterate over and push them into an array
//       // preferably I would interact with firebase directly or just get a proper payload returned
//       for (let [key, value] of Object.entries(results)) {
//         tokens.push({
//           value
//         })
//       }
//       return tokens;
//     });
//   })
//     .then(response => response.json())
//     .then(json => dispatch(resolvedTokens(json)))
// }
//
//
// const tokens = (state = [], action) => {
//   switch (action.type) {
//     case 'GET':
//       return [
//         ...state,
//         {
//           id: action.id,
//           text: action.text,
//           starred: false
//         }
//       ]
//
//     case 'TOGGLE_STAR':
//       return state.map(token =>
//         token.id === action.id ? { ...token, starred: !token.starred } : token
//       )
//     default:
//       return state
//   }
// }
// export default tokens;
