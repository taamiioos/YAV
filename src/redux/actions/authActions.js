
const register = (username, password, name) => ({
    type: 'REGISTER_USER',
    payload: {
        username,
        password,
        name,
    },
});
