import { styled } from '@mui/system';
import { globalStyles } from '../../styles/exportStyles';



export const BackgroundContainer = styled('div')`
  position: relative;
  width: 100%;
  height: 98vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FDFDFD; 
  overflow: hidden;
`;
export const BackgroundText = styled('div')`
  color: #A80B00;
  font-family: 'Helvetica', serif;
  font-style: italic;
  position: absolute;
  font-size: 70vw;
  white-space: nowrap;
  margin-left: -30%;
  pointer-events: none;
  font-weight: 700;
  z-index: 1;
  letter-spacing: -22vh; 


`;
export const Content = styled('div')`
  position: relative;
  //z-index: 2;
  text-align: center;
`;
export const Entry = styled('h2')`
  color: #202020;
  font-family: 'South', serif;
  font-size: 7rem;
  font-weight: 400;
  //line-height: 172.56px;
  text-align: left;
  margin-left: 30%;
  margin-top: 10%;
margin-bottom: 5%;
`;

export const Container = styled('div')`
  background-color: #FDFDFD;
  position: relative;
z-index: 2;
  margin-left: -75%;
  font-family: 'Helevtica', serif;
  border-radius: 40px;
  width: 250%;
  text-align: center;
  min-height: 65vh;
  margin-top: -60%;
  
`
export const InputBlock = styled('input')`

  width: 90%;
  max-width: 540px; 
  height: 50px;
  border: 1px solid grey;
  border-radius: 8px;
  padding-left: 3%;
  box-sizing: border-box;
  margin-left:0 ;
  margin-bottom: 10px;
  
`
export const EntryButton = styled('button')`
  background-color: #A80B00;
  color: #fdfdfd;
  border: none;
  border-radius: 8px;
  width: 90%;
  max-width: 540px;
  padding: 3px 10px;
  font-family: 'Helvetica', serif;
  //TODO шрифт 
  font-size: 20px;
  font-style: italic;
  font-weight: 500;
  line-height: 26.04px;
  text-align: center;
  cursor: pointer;
  height: 50px;
  transition: background-color 0.3s ease;
  white-space: nowrap;
  margin: 2%;


  &:hover {
    background-color: #901209;
    color: #cccccc;
  }
`

export const QuestionBlock =styled('div')`
font-family: 'Helvetica', serif;
`
export const RegLink = styled('a')`
color: #A80B00;
  font-weight: bold;
  text-decoration: none;
`
export const EyeIcon = styled('div')`
  position: absolute;
  //right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`


export { globalStyles };