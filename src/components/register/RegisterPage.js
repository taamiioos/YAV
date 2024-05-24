import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/actions/authActions';
import { EntryButton, RegLink} from "../login/loginPageStyles";
import {
  BackgroundContainer,
  BackgroundText,
  BackgroundBlock,
  ClusterBlock,
  Eye,
  InputContainer,
  InputBlock,
  RegBlock,
  Registration,
  Error, QuestionBlock, FooterBlock
} from "./RegisterPageStyles";

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [clusters, setClusters] = useState([]);
  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const availableClusters = [
    'Кино', 'Театр', 'Музыка', 'Фотография', 'Арт',
    'Диджитал дизайн', 'Фешн', 'Танец', 'Бьюти',
    'Креатив', 'Продюссирование', 'Текст'
  ];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value) ? '' : 'Некорректный email');
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    setUsernameError(value.length >= 3 ? '' : 'Имя пользователя должно быть не менее 3 символов');
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(value.length >= 8 ? '' : 'Пароль должен быть не менее 8 символов');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleClusterClick = (cluster) => {
    setClusters((prevClusters) => {
      if (prevClusters.includes(cluster)) {
        return prevClusters.filter((c) => c !== cluster);
      } else if (prevClusters.length < 3) {
        return [...prevClusters, cluster];
      }
      return prevClusters;
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !usernameError && !passwordError && email && username && password) {
      dispatch(register({
        username: email,
        name: username,
        password: password,
      }));
    } else {
      console.error('Пожалуйста, заполните все поля корректно.');
    }
  };

  return (
      <BackgroundBlock>
        <BackgroundContainer>
          <BackgroundText>YAV</BackgroundText>

          <RegBlock>
            <Registration>РЕГИСТРАЦИЯ</Registration>
            <form onSubmit={handleSubmit}>
              <div>
                <InputContainer>
                  <InputBlock
                      type="text"
                      placeholder="Почта"
                      value={email}
                      onChange={handleEmailChange}
                  />
                  {emailError && <Error style={{ marginLeft: "-7.5%"}}>{emailError}</Error>}
                </InputContainer>
              </div>
              <div>
                <InputContainer>
                  <InputBlock
                      type="text"
                      placeholder="Имя пользователя"
                      value={username}
                      onChange={handleUsernameChange}
                  />
                  {usernameError && <Error>{usernameError}</Error>}
                </InputContainer>
              </div>
              <div>
                <InputContainer>
                  <InputBlock
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Пароль"
                      value={password}
                      onChange={handlePasswordChange}
                  />
                  <Eye onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </Eye>
                  {passwordError && <Error style={{ color: '#A80B00', position:"absolute", marginLeft:"25%", marginTop:"1%", fontFamily:"Helvetica", fontWeight:"bold" }}>{passwordError}</Error>}
                </InputContainer>
              </div>
              <ClusterBlock>
                <p style={{ fontFamily: 'South', fontSize: "3rem", marginTop:"7%", fontWeight: "40" }}>КЛАСТЕРЫ</p>
                <p style={{marginTop:"-5%"}}>Сообщества творцов, в которых они делятся своими работами, общаются, а также совместно участвуют в челленджах. <br /> Вы можете выбрать до 3 кластеров.</p>
                <div>
                  {availableClusters.map((cluster) => (
                      <button
                          type="button"
                          key={cluster}
                          onClick={() => handleClusterClick(cluster)}
                          style={{
                            margin: '5px',
                            padding: '10px 15px',
                            backgroundColor: clusters.includes(cluster) ? '#A80B00 ' : '#E1DBC5',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                          }}
                      >
                        {cluster}
                      </button>
                  ))}
                </div>
              </ClusterBlock>
              <div style={{ marginTop: '20px' }}>
                <EntryButton type="submit">
                  Зарегистрироваться
                </EntryButton>
              </div>
            </form>
            <QuestionBlock>
              Уже есть аккаунт? <RegLink href="/">Войти</RegLink>
            </QuestionBlock>
          </RegBlock>
        </BackgroundContainer>
        <FooterBlock />
      </BackgroundBlock>
  );
};

export default RegisterPage;
