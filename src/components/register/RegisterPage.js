import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/actions/authActions';

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
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>РЕГИСТРАЦИЯ</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <input
                type="text"
                placeholder="Почта"
                value={email}
                onChange={handleEmailChange}
                style={{ width: '300px', padding: '10px' }}
            />
            {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input
                type="text"
                placeholder="Имя пользователя"
                value={username}
                onChange={handleUsernameChange}
                style={{ width: '300px', padding: '10px' }}
            />
            {usernameError && <div style={{ color: 'red' }}>{usernameError}</div>}
          </div>
          <div style={{ marginBottom: '20px', position: 'relative', display: 'inline-block' }}>
            <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Пароль"
                value={password}
                onChange={handlePasswordChange}
                style={{ width: '300px', padding: '10px' }}
            />
            <span
                onClick={togglePasswordVisibility}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer'
                }}
            >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
            {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
          </div>
          <div>
            <h3>КЛАСТЕРЫ</h3>
            <p>Сообщества творцов, в которых они делятся своими работами, общаются, а также совместно участвуют в челленджах. Вы можете выбрать до 3 кластеров.</p>
            <div>
              {availableClusters.map((cluster) => (
                  <button
                      type="button"
                      key={cluster}
                      onClick={() => handleClusterClick(cluster)}
                      style={{
                        margin: '5px',
                        padding: '10px 15px',
                        backgroundColor: clusters.includes(cluster) ? 'red' : '#e0e0e0',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                      }}
                  >
                    {cluster}
                  </button>
              ))}
            </div>
          </div>
          <div style={{ marginTop: '20px' }}>
            <button
                type="submit"
                style={{
                  padding: '10px 20px',
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
            >
              Зарегистрироваться
            </button>
          </div>
        </form>
        <div style={{ marginTop: '20px' }}>
          Уже есть аккаунт? <a href="#">Войти</a>
        </div>
      </div>
  );
};

export default RegisterPage;
