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
const getArticleInfo = data => ({
  type: constants.GET_ARTICLE,
  data
});
export const ArticleList = () => {
  return dispatch => {
    axios.get("./api/arcticle-info.json").then(res => {
      const action = getArticleInfo(res.data.data);
      dispatch(action);
    });
  };
};
