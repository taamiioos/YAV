import { styled } from '@mui/system';
import { globalStyles } from '../../styles/exportStyles';

export const Container = styled('div')`
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  background-color: #FDFDFD;
  width: 98%;
  border-radius: 20px 20px 0 0;
  font-family: 'Helvetica', serif;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ClusterName = styled('h2')`
  font-family: 'South', serif;
  font-size: 8rem; 
  font-weight: 400;
  line-height: 1.1;
  text-align: left;
  color: #202020;
  margin: 5% 0 0 7%;
  padding: 0;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const OutCluster = styled('button')`
  font-family: 'Helvetica', sans-serif;
  font-size: 1rem;
  font-style: italic;
  font-weight: 700;
  line-height: 26.04px;
  text-align: center;
  background-color: #FDFDFD;
  color: #202020;
  border-radius: 5px;
  cursor: pointer;
  padding: 15px 25px;
  transition: background-color 0.3s ease;
  align-self: flex-end;
  position: absolute;
  border-color: #202020;
  margin-top: 7%;
  margin-right: 5%;

  &:hover {
    background-color: #A80B00;
    color: #FDFDFD;
  }

  &.selected {
    background-color: #A80B00;
    color: #FDFDFD;
  }

` ;
export const Participants = styled('span')`
  align-self: flex-end;
  position: absolute;
  margin-right: 20%;
  margin-top: 8%;
  width: 15%;
  height: 3%;
  font-family: 'Helvetica', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.48px;
  text-align: right;
  color: #202020;
  
`;

export { globalStyles };