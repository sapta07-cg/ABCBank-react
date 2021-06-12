import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";

import { EmployeeReducer } from "./EmployeeReducer";
import { LadReducer } from "./LadReducer";
import { AdminReducer } from "./AdminReducer";
import { UserRegisterReducer } from "./UserRegisterReducer";
import { AdminLoginReducer } from "./AdminLoginReducer";

const rootReducer = combineReducers({
  employee: EmployeeReducer,
  admin: AdminReducer,
  lad: LadReducer,
  UserRegister: UserRegisterReducer,
  AdminLogin: AdminLoginReducer,
});

//const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
