import { fromJS } from "immutable";
const defalutState = fromJS({
  content: "2018.10.07 00:12* 字数 1201 阅读 1155 评论 7 喜欢 23"
});

export default (state = defalutState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
