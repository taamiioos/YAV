import {useState} from "react";
import {useEffect} from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {
    BackgroundContainer,
    BackgroundText,
    Content,
    Entry,
    Container,
    InputBlock,
    EntryButton,
    QuestionBlock,
    RegLink,
    EyeIcon
} from "./loginPageStyles";
import {Link} from "react-router-dom";


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Введите электронную почту');
    const [passwordError, setPasswordError] = useState('Введите пароль');
    const [formValid, setFormValid] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError]);

    const emailHandler = (e) => {

        //TODO что-то с ошибкой порешать
        setEmail(e.target.value)
        //const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
        //TODO email_regular:   /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный адрес электронной почты')
        } else {
            setEmailError("")
        }
    };

    const passwordHandler = (e) => {

        //TODO во внутрь поля
        setPassword(e.target.value)
        if (e.target.value.length < 6) {
            // TODO валидация пароля
            setPasswordError('не менее 6 символов')
            if (!e.target.value) {
                setPasswordError('Введите пароль')
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
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <BackgroundContainer>
            <BackgroundText>YAV</BackgroundText>
            <Content>
                <Container>
                    <form>
                        <Entry>Вход</Entry>


                        {(emailDirty && emailError) && <div>{emailError}</div>}
                        <InputBlock

                            onChange={e => emailHandler(e)}
                            value={email}
                            onBlur={e => blurHandler(e)}
                            name='email'
                            type="text"
                            placeholder="Почта"

                        />



                        <div>
                            {(passwordDirty && passwordError) && <div>{passwordError}</div>}
                            <InputBlock

                                onChange={passwordHandler}
                                value={password}
                                onBlur={blurHandler}
                                name='password'
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Пароль"
                            />
                            <EyeIcon onClick={togglePasswordVisibility}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </EyeIcon>

                        </div>

                        <EntryButton className="button" disabled={!formValid} type="submit"> Войти</EntryButton>
                        <QuestionBlock className="questoin">Нет аккаунта?<RegLink href="/register">Зарегистрироваться</RegLink></QuestionBlock>
                    </form>
                </Container>
            </Content>
        </BackgroundContainer>
    );
}

export default LoginPage;