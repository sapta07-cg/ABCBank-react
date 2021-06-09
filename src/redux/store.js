import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";

import { EmployeeReducer } from "./EmployeeReducer";
import { LadReducer } from "./LadReducer";
import { AdminReducer } from "./AdminReducer";

const rootReducer = combineReducers({
  employee: EmployeeReducer,
  admin: AdminReducer,
  lad: LadReducer,
  //admin : DepartRducer,
  //vechil: VechuileReucer
});

//const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
