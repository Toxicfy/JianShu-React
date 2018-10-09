import * as constants from "./constants";
import axios from "axios";

const getBannerImageList = data => ({
  type: constants.GET_BNANNER,
  data
});

export const bannerList = () => {
  return dispatch => {
    axios.get("./api/banner-image.json").then(res => {
      const action = getBannerImageList(res.data.data);
      dispatch(action);
    });
  };
};
