import * as constants from "./constants";
import { fromJS } from "immutable";

const defalutState = fromJS({
  focused: false,
  list: [],
  // 分页
  mouseIn: false,
  page: 1,
  totalPage: 0
});

export default (state = defalutState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set("focused", true);
    case constants.SEARCH_BLUR:
      return state.set("focused", false);
    case constants.SEARCH_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      });
    case constants.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case constants.MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case constants.CHANGE_PAGE:
      const page = state.get("page");
      const totalPage = state.get("totalPage");
      return state.set("page", page < totalPage ? page + 1 : 1);
    default:
      return state;
  }
};
