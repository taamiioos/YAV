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
  font-size: 68vw;
  white-space: nowrap;
  margin-left: -20%;
  pointer-events: none;
  font-weight: 700;
  z-index: 1;
  letter-spacing: -24vh; 


`;
export const Content = styled('div')`
  position: relative;
  z-index: 2;
  text-align: center;
`;
export const Entry = styled('h2')`
  color: #202020;
  font-family: 'South', serif;
  font-size: 3rem;
  font-weight: 400;
  line-height: 172.56px;
  text-align: left;

`;
export { globalStyles };