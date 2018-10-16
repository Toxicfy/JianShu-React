import { fromJS } from "immutable";
import * as constants from "./constants";
const defalutState = fromJS({
  content: "2018.10.07 00:12* 字数 1201 阅读 1155 评论 7 喜欢 23",
  detailContent: ""
});

export default (state = defalutState, action) => {
  switch (action.type) {
    case constants.GET_DETAIL:
      return state.set("detailContent", action.data);
    default:
      return state;
  }
};
