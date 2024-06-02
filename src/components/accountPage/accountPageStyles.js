
import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f0f0;
`;

export const BackgroundText = styled.h1`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 4rem;
  color: #e0e0e0;
  user-select: none;
  z-index: -1;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
`;

export const ProfileHeader = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoBlock = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const InputField = styled.input`
  width: calc(100% - 2.5rem);
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const EyeIcon = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 0.75rem;
  cursor: pointer;
`;

export const UpdateButton = styled.button`
  padding: 0.75rem;
  margin-top: 1rem;
  border: none;
  background-color: #4CAF50;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const LogoutButton = styled.button`
  padding: 0.75rem;
  margin-top: 1rem;
  border: none;
  background-color: #d9534f;
  color: white;
  border-radius: 4px;
  cursor: pointer;
`;
