import * as constants from "./constants";
import axios from "axios";

export const getDetailAction = data => ({
  type: constants.GET_DETAIL,
  data
});

export const getDetail = () => {
  return dispatch => {
    axios.get("../api/detail-content.json").then(res => {
      const action = getDetailAction(res.data.data);
      dispatch(action);
    });
  };
};