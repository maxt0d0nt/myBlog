export const LoginStart = (userCredentials) => ({
    type: "LOGIN_STRAT",
});

export const LoginSuccess = (user) => ({
    Type: "LOGIN_SUCCESS",
    payload: user,
});

export const loginFailure = () => ({
    type: "LOGIN_FAILURE"
});

export const Logout = () => ({
    type: "LOGOUT"
})