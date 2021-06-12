const initState = {
  list: [],
};

// ACTION TYPES
const USER_REGISTER = "USER_REGISTER";

// ACTIONS :: COmponents are interacting with this action
export function UserRegisterAction(payload) {
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8080/api/Registration/AdminRegistration";
    const requestBody = { ...payload };

    // HTTP Client
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // UPDATE THE UI
    dispatch({ type: USER_REGISTER, payload: payload });
  };
}

// REDUCER LOGIC
export function UserRegisterReducer(state = initState, action) {
  switch (action.type) {
    case USER_REGISTER:
      return { ...state, list: [action.payload, ...state.list] };

    default:
      return state;
  }
}
