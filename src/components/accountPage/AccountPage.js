import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {
    BackgroundContainer,
    BackgroundText,
    Content,
    Container,
    ProfileHeader,
    ProfileSection,
    InfoBlock,
    Label,
    InputField,
    UpdateButton,
    EyeIcon,
    LogoutButton
} from "./accountPageStyles";

// import { updateProfile, logout } from '../../redux/actions/authActions';
import { useDispatch, useSelector } from "react-redux";

const AccountPage = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);

    // Инициализируем состояния только если `user` существует
    // const [name, setName] = useState(user?.name || '');
    // const [email, setEmail] = useState(user?.email || '');
    // const [password, setPassword] = useState('');

    const [name, setName] = useState("бубубу");
    const [email, setEmail] = useState("утютютю");
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (!name || !email) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [name, email]);

    // const handleUpdate = (e) => {
    //     e.preventDefault();
    //     dispatch(updateProfile({
    //         name,
    //         email,
    //         password: password || undefined, // Не отправляем пароль, если он не изменился
    //     }));
    // };

    // const handleLogout = () => {
    //     dispatch(logout());
    // };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

   //заглушка???
   //  if (!user) {
   //      return (
   //          <BackgroundContainer>
   //              <BackgroundText>YAV</BackgroundText>
   //              <Content>
   //                  <Container>
   //                      <ProfileHeader>Ошибка авторизации</ProfileHeader>
   //                      <a href={"/registerPage"}>Зарегестрироваться</a><br/>
   //                      <a href={"/"}>Войти</a>
   //                  </Container>
   //              </Content>
   //          </BackgroundContainer>
   //      );
   //  }

    return (
        <BackgroundContainer>
            <BackgroundText>YAV</BackgroundText>
            <Content>
                <Container>
                    <ProfileHeader>Личный кабинет</ProfileHeader>
                    <ProfileSection>
                        {/*<form onSubmit={handleUpdate}>*/}
                            <InfoBlock>
                                <Label>Имя</Label>
                                <InputField
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    type="text"
                                    placeholder="Имя"
                                />
                            </InfoBlock>
                            <InfoBlock>
                                <Label>Почта</Label>
                                <InputField
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Почта"
                                />
                            </InfoBlock>
                            <InfoBlock>
                                <Label>Пароль</Label>
                                <InputField
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Новый пароль"
                                />
                                <EyeIcon onClick={togglePasswordVisibility}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </EyeIcon>
                            </InfoBlock>
                            <UpdateButton disabled={!formValid} type="submit">Обновить профиль</UpdateButton>
                        {/*</form>*/}
                        <LogoutButton >Выйти</LogoutButton>
                        {/*onClick={handleLogout}*/}
                    </ProfileSection>
                </Container>
            </Content>
        </BackgroundContainer>
    );
}

export default AccountPage;
