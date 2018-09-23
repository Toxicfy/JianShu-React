import * as constants from "./constants";
import { fromJS } from "immutable";

const defalutState = fromJS({
  focused: false,
  list: []
});

export default (state = defalutState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return state.set("focused", true);
  }
  if (action.type === constants.SEARCH_BLUR) {
    return state.set("focused", false);
  }
  if (action.type === constants.SEARCH_LIST) {
    return state.set("list", action.data);
  }
  return state;
};
