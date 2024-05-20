import { styled } from '@mui/system';
import { globalStyles } from '../../styles/exportStyles';

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


export const FeedHeader = styled('h1')`
  font-family: 'South', serif;
  font-size: 2.1rem;
  font-weight: 400;
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
  position: absolute;
  border: none;
  margin-top: 1.5%;
  margin-right: 2%;

  &:hover {
    color: #9b0000;
  }

  &.selected {
    color: #9b0000;
  }
` ;
export { globalStyles };