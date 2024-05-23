import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/actions/authActions';

import {Container, Entry, EntryButton, RegLink} from "../login/loginPageStyles";
import {
  BackgroundContainer,
  BackgroundText,
  BackgroundBlock,
  ClusterBlock,
  Eye,
  InputBlock,
  RegBlock,
  Registration,
  ButtonStyled,
  QuestionBlock, FooterBlock
} from "./RegisterPageStyles";
import {fontFamily} from "@mui/system";

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [clusters, setClusters] = useState([]);
  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const dispatch = useDispatch();

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
    setPasswordError(value.length >= 6 ? '' : 'Пароль должен быть не менее 6 символов');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !usernameError && !passwordError && email && username && password) {
      dispatch(register(username, password, email));
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
            <InputBlock
                type="text"
                placeholder="Почта"
                value={email}
                onChange={handleEmailChange}

            />
            {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
          </div>
          <div>
            <InputBlock
                type="text"
                placeholder="Имя пользователя"
                value={username}
                onChange={handleUsernameChange}

            />
            {usernameError && <div style={{ color: 'red' }}>{usernameError}</div>}
          </div>
          <div >
            <InputBlock
                type={showPassword ? 'text' : 'password'}
                placeholder="Пароль"
                value={password}
                onChange={handlePasswordChange}

            />
            <Eye
                onClick={togglePasswordVisibility}
            >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Eye>
            {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
          </div>
          <ClusterBlock>
            <h3 style={{fontFamily:'South', fontSize:"3rem", margin:0, fontWeight:"40"}}>КЛАСТЕРЫ</h3>
            <p>Сообщества творцов, в которых они делятся своими работами, общаются, а также совместно участвуют в челленджах. <br></br> Вы можете выбрать до 3 кластеров.</p>
            <div>
              {availableClusters.map((cluster) => (
                  <button
                      type="button"
                      key={cluster}
                      onClick={() => handleClusterClick(cluster)}
                      style={ {
                        margin: '5px',
                        padding: '10px 15px',
                        backgroundColor: clusters.includes(cluster) ? '#A80B00 ' : '#E1DBC5',
                        // color: clusters.includes(cluster) ? '# ' : '#0e0e0e',
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
            <EntryButton
                type="submit"

            >
              Зарегистрироваться
            </EntryButton>
          </div>
        </form>
        <QuestionBlock >
          Уже есть аккаунт? <RegLink href="/">Войти</RegLink>
        </QuestionBlock>

      </RegBlock>
      </BackgroundContainer>
        <FooterBlock />
      </BackgroundBlock>
  );
};

export default RegisterPage;
