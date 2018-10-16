import { fromJS } from "immutable";
const defalutState = fromJS({
  content: ""
});

export default (state = defalutState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
