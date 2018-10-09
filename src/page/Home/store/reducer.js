import { fromJS } from "immutable";
import * as constants from "./constants";

const defalutState = fromJS({
  bannerImageList: []
});

export default (state = defalutState, action) => {
  switch (action.type) {
    case constants.GET_BNANNER:
      return state.set("bannerImageList", action.data);
    default:
      return state;
  }
};
