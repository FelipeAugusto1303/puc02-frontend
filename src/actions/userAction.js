export const loginRequest = (user) => ({
  type: "LOGIN",
  payload: user,
});

export const logoutRequest = () => ({
  type: "LOGOUT",
});
