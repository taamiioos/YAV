import { styled } from '@mui/system';
import { globalStyles } from '../../styles/exportStyles';

export const Container = styled('div')`
  width: 95%;
  margin-top: 2%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 25px;
  background-color: #A80B00;
  display: flex;
  flex-direction: column;
  position: relative; 
`;

export const Header = styled("h3")`
  font-weight: 400;
  line-height: 1.1;
  width: 30%; 
  height: 5.39%; 
  margin-top: 3%;
  margin-left: 4%;
  margin-bottom: -1%;

  font-family: 'South',serif;
  font-size: 3rem; 
  text-align: left;
  white-space: nowrap;
  color: #FDFDFD;


`;
export const Info = styled("p")`
  color: #FDFDFD;
  width: 65%; 
  margin-left: 4%; 
  font-family: 'Helvetica',serif;
  font-size: 1rem; 
  font-weight: 400;
  line-height: 1.28rem; 
  text-align: left;
  padding-bottom: 4%;
`;
export const Button = styled("button")`
  font-family: 'Helvetica', sans-serif;
  font-size: 1rem;
  font-style: italic;
  font-weight: 700;
  line-height: 26.04px;
  text-align: center;
  background-color: #FDFDFD;
  color: #A80B00;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 15px 25px;
  transition: background-color 0.3s ease;
  align-self: flex-end;
  position: absolute; 
  margin-top: 3%; 
  right: 3%; 
  
  &:hover {
    background-color: #A80B00;
    color: #FDFDFD;
  }

  &.selected {
    background-color: #A80B00;
    color: #FDFDFD;
  }
`;

export const Participants = styled('span')`
  width: 15%;
  height: 3%;
  position: absolute;
  top: 33%; 
  font-family: 'Helvetica', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 20.48px;
  text-align: right;
  color: #FDFDFD;
  align-self: flex-end;
  right: 3%;
`;


export { globalStyles };