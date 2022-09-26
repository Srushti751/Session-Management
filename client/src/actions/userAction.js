import { postLogin } from "../apis/employeeapi";

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQ" });
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const response = await postLogin(user, config);

    console.log("response", response);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data.user });
    localStorage.setItem("currentUser", JSON.stringify(response.data.user));
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAIL", payload: error });
    alert("Login failed");
  }
};
