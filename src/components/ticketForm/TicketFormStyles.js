import { styled } from '@mui/system';



export const FormContainer = styled('div')`
  margin-top: 1%;
  width: 55%;
  max-height: 2390px;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  margin-left: 10%;
  flex-direction: column;
  text-align: left;
  flex: 1; 
`;


export const FormLabel = styled("label")`
  font-size: 18px;
  margin-bottom: 5px;
  color: #202020;
  font-family: 'Helvetica',serif;
  font-weight: 400;
  line-height: 24.84px;
  text-align: left;

`;

export const InputContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2%;
`;
export const Input = styled("input")`
  background-color: #FDFDFD;
  border-color: #8E8A7D;
  border-radius: 5px;
  font-size: 18px;
  font-family: 'Helvetica', serif;
  padding: 0.05% 30% 0.05% 0.2%; 
  height: 48px;
`;
export const Button = styled("button")`
  font-family: 'Helvetica', sans-serif;
  font-size: 20px;
  font-style: italic;
  font-weight: 700;
  line-height: 26.04px;
  text-align: center;
  background-color: #9b0000;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 15px 25px;
  transition: background-color 0.3s ease;
  align-self: flex-end;
  position: absolute;
  margin-top: -1%;
  margin-left: 0;

  &:hover {
    background-color: #ffffff;
    color: #9b0000;
  }

  &.selected {
    background-color: #ffffff;
    color: #9b0000;
  }
`;
export const Participants = styled('span')`
  font-family: 'Helvetica', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 20.48px;
  text-align: left;
  margin-left: 1%;
  margin-top: 8%;
  color: #202020;
`;
export const Ticket = styled("div")`
  font-family: 'Helvetica', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 20.48px;
  text-align: left;
  margin-left: 1%;
  margin-top: 5%;
  color: #202020;
`;
export const Price = styled('h4')`
  font-family: South,serif;
  font-size: 1.9rem;
  margin-top: -6%;
  margin-left: 45%;
  font-weight: 400;
  line-height: 46.02px;
  text-align: left;
  color: #202020;
`;
