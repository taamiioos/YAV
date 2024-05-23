const REGISTER_USER = 'REGISTER_USER';

const register = (username, password, name) => ({
    type: REGISTER_USER,
    payload: {
        username,
        password,
        name,
    },
});
