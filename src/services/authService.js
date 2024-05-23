import axios from 'axios';

export const register = async (username, password, name) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/reg', {
            username,
            password,
            name,
        });
        if (response.data.status === true) {
            console.log('User registered successfully');
        } else {
            console.log('User registration failed');
        }
    } catch (error) {
        console.log('User registration failed');
    }
};

export function useAuth() {
    const register = async (email, nickname, password) => {
        try {
            const response = await axios.post('/api/register', {
                username,
                password,
                name, });
            if (response.data.status === true) {
                history.push('/cluster-page');
            } else {
                console.error('Ошибка регистрации:', response.data.error);
            }
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

//     const login = async (email, password) => {
//         try {
//             const response = await axios.post('/api/auth', { username: email, password: password });
//             if (response.data.status === true) {
//             } else {
//
//             }
//         } catch (error) {
//             console.error('Ошибка:', error);
//         }
//     };
//
//     return {
//         register,
//         login,
//     };
}
