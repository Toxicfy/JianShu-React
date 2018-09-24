import { combineReducers } from 'redux-immutable'
import { reducer as HeaderReducer} from "../common/header/store";


// 组合 reducer
const reducer = combineReducers({
  header: HeaderReducer
});

export default reducer;
