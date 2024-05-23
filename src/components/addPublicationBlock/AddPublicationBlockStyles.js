import {styled} from "@mui/system";
import { globalStyles } from '../../styles/exportStyles';

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;

` ;
export const Images = styled('div')`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: 2%;
  width: 100%;

` ;
export { globalStyles };
export const Textarea = styled('textarea')`
  width: 80%;
  resize: none;
  padding: 10px;
  border-width: 1px; 
  border-style: solid; 
  border-color: #8E8A7D; 
  border-radius: 5px;
  box-sizing: border-box;
  margin-left: 7%;
  margin-top: 4%;
  &[rows="1"] {
    height: auto;
    padding-bottom: 0;
  }

  transition: height 0.3s ease;
`;

export const Button = styled('button')`
  color: #ffffff;
  font-family: 'Helvetica', sans-serif;
  font-size: 20px;
  font-style: italic;
  font-weight: 700;
  line-height: 26.04px;
  text-align: center;
  background-color: #9b0000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 15px 25px;
  transition: background-color 0.3s ease;
  align-self: flex-end;
  margin-right: 72%;
  margin-top: 4%;

  &:hover {
    background-color: #ffffff;
    color: #9b0000;
  }

  &.selected {
    background-color: #ffffff;

`;
export const InputButton = styled('button')`
  color: #202020;
  font-size: 2rem;
  text-align: center;
  background-color: #F3F1EA;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  padding: 5% 10%;
  transition: background-color 0.3s ease;
  align-self: flex-end;
  margin-right: 70%;
  margin-top: 2%;

  &:hover {
    background-color: #F3F1EA;
    color: #202020;
  }

  &.selected {
    background-color: #F3F1EA;
    color: #202020;
  }`;



export const Input = styled('input')`
  display: none;
`;



export const PreviewImage = styled('img')`
  max-width: 40%;
  max-height: 40%;
  margin-top: 10px;
  border-radius: 20px;
  flex-direction: row;

`;