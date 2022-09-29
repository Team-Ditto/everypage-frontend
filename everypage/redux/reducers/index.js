import { combineReducers } from "redux";

let allReducers = combineReducers({
  // state all the reducers needed to be combined here
});

const rootReducers = (state, action) => {
    return allReducers(state, action);
  };
  
export default rootReducers;
