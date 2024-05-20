import {useState} from "react";
import {useEffect} from "react";
import {BackgroundContainer, BackgroundText, Content, Entry} from "./loginPageStyles";


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Поле не может быть пустым');
    const [passwordError, setPasswordError] = useState('Поле не может быть пустым');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError]);

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный адрес электронной почты')
        } else {
            setEmailError("")
        }
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 6) {
            setPasswordError('Некорректный пароль')
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
            case 'password':
                setPasswordDirty(true)
                break
            default:
        }
    };

    return (
        <BackgroundContainer>
            <BackgroundText>YAV</BackgroundText>
            <Content>
                <form>
                    <Entry>Вход</Entry>

                    {(emailDirty && emailError) && <div>{emailError}</div>}
                    <input
                        onChange={e => emailHandler(e)}
                        value={email}
                        onBlur={e => blurHandler(e)}
                        name='email'
                        type="text"
                        placeholder="Почта"
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

                    <button className="button" disabled={!formValid} type="submit"> Войти</button>
                    <div className="questoin">Нет аккаунта?<a href="/register">Зарегистрироваться</a></div>
                </form>
            </Content>
        </BackgroundContainer>
    );
}

export default LoginPage;