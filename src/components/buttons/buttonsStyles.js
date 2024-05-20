import {styled} from '@mui/system';
import { globalStyles } from '../../styles/exportStyles';

export const ButtonStyled = styled('button')`
  background-color: #E1DBC5;
  color: #202020;
  border: none;
  border-radius: 8px;
  font-size: 17px;
  font-family: Inter, serif;
  font-weight: bold;
  padding: 3px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: #A80B00;
    color: #E1DBC5;
  }

  &.selected {
    background-color: #A80B00;
    color: #E1DBC5;
  }

  &:not(:last-child) {
    margin-right: 2%; 
  }
`;

export const ButtonBlock = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  max-width: 95%;
  height: 30px;
  margin: 0 auto 4%;
  padding-bottom: 1%;
`;
export { globalStyles };