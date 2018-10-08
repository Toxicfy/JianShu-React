import { fromJS } from "immutable";

const defalutState = fromJS({
  collectionList: []
});

const HomeReducer = (state = defalutState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default HomeReducer;
