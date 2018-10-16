import { combineReducers } from "redux-immutable";
import { reducer as HeaderReducer } from "../common/header/store";
import { reducer as HomeReducer } from "../page/Home/store";
import { reducer as DetailReducer } from "../page/Detail/store";

// 组合 reducer
const reducer = combineReducers({
  header: HeaderReducer,
  home: HomeReducer,
  detail: DetailReducer
});

export default reducer;
