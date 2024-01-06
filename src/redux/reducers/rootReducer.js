import { combineReducers } from "redux";
import formReducer from "./formReducer";
import buttonGroupReducer from "./buttonGroupReducer";

const rootReducer = combineReducers({
  form: formReducer,
  buttonGroup: buttonGroupReducer,
});

export default rootReducer;
