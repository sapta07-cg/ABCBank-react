const initState = {
  list: [],
  // will display the proper login page
  loginAction: false,
};

// ACTION TYPES
const LOGIN_ACTION = "LOGIN_ACTION";
const ADMIN_LOGIN_ACTION = "ADMIN_LOGIN_ACTION";

// ACTIONS :: Login Action
export function AdminLoginAction(payload) {
  // MAKE SURE redux-thunk is installed.
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    try {
      const url = "http://localhost:8080/api/Login/AdminLogin/";
      const requestBody = { ...payload };

      // HTTP Client
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const admin = await response.text();

      console.log(admin);
      if (admin) {
        // UPDATE THE UI
        dispatch({ type: ADMIN_LOGIN_ACTION, payload: payload });
      } else {
        //
      }
    } catch (error) {
      console.log(error);
    }
  };
}

// REDUCER LOGIC
export function AdminLoginReducer(state = initState, action) {
  switch (action.type) {
    case ADMIN_LOGIN_ACTION:
      return { ...state, loginAction: true };
    default:
      return state;
  }
}
