import { styled } from '@mui/system';
import { globalStyles } from '../../styles/exportStyles';
import Modal from 'react-modal';


export const Container = styled('div')`
  margin-top: 2%;
  width: 65%;
  max-height: 2390px;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;
export const CustomModalStyles = styled(Modal)`
  position: fixed;
  z-index: 1000; 
  left: 50%; 
  top: 40%;
  transform: translate(-50%, -50%);
  background-color: #FDFDFD;
  border-radius: 20px;
  width: 70%;
  height: 60%;

`;


export const FeedHeader = styled('h1')`
  font-family: 'South', serif;
  font-size: 2.1rem;
  font-weight: 700;
  line-height: 1.1;
  text-align: left;
  color: #202020;
  margin: 3% 0 0 7%;
  padding: 0;
  align-self: flex-start;
`;

export const AddFeed = styled('button')`
  font-family: 'Helvetica', sans-serif;
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 700;
  line-height: 26.04px;
  text-align: center;
  background-color: #FDFDFD;
  color: #9b0000;
  border-radius: 5px;
  cursor: pointer;
  padding: 15px 25px;
  transition: background-color 0.3s ease;
  align-self: flex-end;
  border: none;
  margin-top: -5%;
  margin-right: 2%;

  &:hover {
    color: #9b0000;
  }

  &.selected {
    color: #9b0000;
  }
` ;
export { globalStyles };

export const Publication = styled('div')`
  margin-top: 3%;
  margin-bottom: 20px;
  padding: 20px 20px 20px 35px;
  margin-left: 7%;
  position: relative;

`;

export const PublicationHeader = styled('div')`
  font-family: 'Helvetica', serif;
  color: #202020;
  font-size: 1.5rem;
  line-height: 24.84px;
  text-align: left;
  font-style: revert;
  margin-top: -1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2%;
  margin-left: 2%;

  h2 {
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 12px;
    color: #7f7f7f;
  }

  font-weight: 500;



`;


export const PublicationText = styled('div')`
  p {
    margin: 0;
  }
`;


export const MessageWrapper = styled('div')`
  font-family: 'Helvetica', serif;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 20.48px;
  text-align: left;

  padding: 10px;
  max-width: 80%;
  margin-left: 10px;
`;

export const Avatar = styled('img')`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const CircularElement = styled('div')`
  width: 20px;
  height: 20px;
  background-color: #BCB7A5;
  border-radius: 50%;
  position: absolute;
  margin-left: -3%; 
  margin-top: -1%;
`;

export const Line = styled('div')`
  width: 2px;
  background-color: #BCB7A5;
  position: absolute;
  margin-left: -2%;
  top: 15%; 
  bottom: 2%; 

`;

export const InteractiveIcons = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5%;
  margin-left: 2%;

  span {
    margin-right: 10px;
    cursor: pointer;
    &:hover {
      color: #9b0000;
    }

    &.selected {
      color: #9b0000;
    }
  }

`;

