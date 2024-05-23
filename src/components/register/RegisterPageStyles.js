import { styled } from '@mui/system';
import { globalStyles } from '../../styles/exportStyles';


export const BackgroundContainer = styled('div')`
  position: relative;
  width: 100%;
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
  margin-top: -15%;
  pointer-events: none;
  font-weight: 700;
  z-index: 1;
  letter-spacing: -22vh; 


`;
export const RegBlock = styled('div')`
  z-index: 2;
  background-color: #FDFDFD;
  text-align: center;
  border-radius: 40px;
  width: 60%;
  margin-top: 5%;
  
`
export const Registration = styled('h1')`
font-weight: 400;
  font-family: 'South', serif;
  text-align: center;
  font-size: 6rem;
`

export const InputBlock = styled('input')`
  width: 90%;
  max-width: 540px;
  height: 50px;
  border: 1px solid grey;
  border-radius: 8px;
  box-sizing: border-box;
  margin-left:0 ;
  margin-bottom: 10px;
  display: inline-block;
  position: relative;
  padding-left: 1%;
`

export const Eye = styled('span')`
  //position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer
`
export const ClusterBlock = styled('div')`
text-align: left;
  width: 80%;
  margin-left: 17%;
`
export const BackgroundBlock = styled('div')`
  background-color: #202020;
display: flex; 
  overflow: scroll;
  
`
export const QuestionBlock = styled('div')`
  font-family: 'Helvetica', serif;
  margin-bottom: 4%;
`

export const FooterBlock = styled('div')`
  width: 100%;
  height: 300px;
  background-color: #202020;
  position: absolute;
  bottom: -30%;
  left: 0;
  z-index: 0;
`;

//style={{ marginBottom: '20px', position: 'relative', display: 'inline-block' }}


// style={{
//                         margin: '5px',
//                         padding: '10px 15px',
//                         backgroundColor: clusters.includes(cluster) ? 'red' : '#e0e0e0',
//                         border: 'none',
//                         borderRadius: '5px',
//                         cursor: 'pointer'
//                       }}