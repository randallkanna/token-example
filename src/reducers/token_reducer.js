import { FETCH_TOKENS } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TOKENS:
      return [action.payload.data, ...state];
  }

  return state;
}
