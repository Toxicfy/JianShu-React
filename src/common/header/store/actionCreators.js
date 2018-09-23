import * as constants from "./constants";
import { fromJS } from "immutable";
import axios from "axios";

const getList = data => ({
  type: constants.SEARCH_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});
export const changePage = () =>({
  type: constants.CHANGE_PAGE,
});

export const searchList = () => {
  return dispatch => {
    axios
      .get("./api/search-list.json")
      .then(res => {
        const action = getList(res.data.data);
        dispatch(action);
      })
      .catch(err => {
        console.log(err);
      });
  };
};
