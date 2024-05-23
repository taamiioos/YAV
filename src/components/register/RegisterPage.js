import {useState} from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";


const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [nicknameDirty, setNicknameDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Поле не может быть пустым');
    const [nicknameError, setNicknameError] = useState('Поле не может быть пустым');
    const [passwordError, setPasswordError] = useState('Поле не может быть пустым');
    const [formValid, setFormValid] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        dispatch(register(username, password, name));
    };

    useEffect(() => {
        if (emailError || nicknameError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, nicknameError, passwordError]);

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный адрес электронной почты')
        } else {
            setEmailError("")
        }
    };

    const nicknameHandler = (e) => {
        setNickname(e.target.value)
        if (!e.target.value) {
            setNicknameError('Поле не может быть пустым')
        } else {
            setNicknameError("")
        }
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 6) {
            setPasswordError('Длина пароля должна составлять не менее 6 символов')
            if (!e.target.value) {
                setPasswordError('Поле не может быть пустым')
            }
        } else {
            setPasswordError("")
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'nickname':
                setNicknameDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            default:
        }
    };

    return (
        <div className="register">
            <form onSubmit={handleSubmit}>
                <h1>Регистрация</h1>

                {(emailDirty && emailError) && <div>{emailError}</div>}
                <input
                    onChange={e => emailHandler(e)}
                    value={email}
                    onBlur={e => blurHandler(e)}
                    name='email'
                    type="text"
                    placeholder="Почта"
                />

                {(nicknameDirty && nicknameError) && <div>{nicknameError}</div>}
                <input
                    onChange={e => nicknameHandler(e)}
                    value={nickname}
                    onBlur={e => blurHandler(e)}
                    name='nickname'
                    type="text"
                    placeholder="Логин"
                />

                {(passwordDirty && passwordError) && <div>{passwordError}</div>}
                <input
                    onChange={e => passwordHandler(e)}
                    value={password}
                    onBlur={e => blurHandler(e)}
                    name='password'
                    type="password"
                    placeholder="Пароль"
                />

                <div>КЛАСТЕРЫ... я пока не ебу, как их запихнуть, девочки</div>
                <button className="button" disabled={!formValid} type="submit"> Зарегистрироваться</button>
                <div className="questoin">Уже есть аккаунт?<a href="/login">Войти</a></div>
            </form>

        </div>
    );
}

export default RegisterPage;