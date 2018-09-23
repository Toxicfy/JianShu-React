import * as constants from "./constants";
import { fromJS } from "immutable";
import axios from "axios";

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

const getList = data => ({
  type: constants.SEARCH_LIST,
  data
});

export const searchList = () => {
  return dispatch => {
    axios
      .get("./api/search-list.json")
      .then(res => {
        const action = getList(fromJS(res.data.data));
        dispatch(action);
      })
      .catch(err => {
        console.log(err);
      });
  };
};
