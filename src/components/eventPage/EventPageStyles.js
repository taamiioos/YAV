import { styled } from '@mui/system';
import { globalStyles } from '../../styles/exportStyles';
import {Link} from "react-router-dom";

export const Container = styled('div')`
  background-color: #F3F1EA;
`;

export const BuyLink =styled(Link)`
  text-decoration: none;
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
  position: absolute;
  margin-top: -3%;
  margin-left: 6%;

  &:hover {
    background-color: #ffffff;
    color: #9b0000;
  }

  &.selected {
    background-color: #ffffff;
    color: #9b0000;
  }
`
export const Image = styled("img")`
  float: right;
  margin-right: 5%;
  margin-top: 5%;
`;

export const Info = styled("p")`
  width: 50%;
  height: 12.64%;
  margin: 2% 0 0 10%;
  font-family: 'Helvetica', serif;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1rem;
  text-align: left;
  color: #202020;

`;

export const NameEvent = styled('h1')`
  font-family: 'South', serif;
  font-size: 9rem;
  font-weight: 400;
  line-height: 1.1;
  text-align: left;
  color: #A80B00;
  margin: 5% 0 0 8%;
  padding: 0;
  align-self: flex-start;
`;

export const Price = styled('h4')`
  font-family: South,serif;
  font-size: 1.9rem;
  margin-top: 2%;
  margin-left: 10%;
  font-weight: 400;
  line-height: 46.02px;
  text-align: left;
  color: #202020;
  margin-bottom: 0.4%;
`;
export const Participants = styled('span')`
  font-family: 'Helvetica', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 20.48px;
  text-align: left;
  margin-left: 10%;
  margin-top: 0;
  color: #202020;
`;
export const DateAndPlace = styled('div')`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  gap: 2%;
  margin-left: 10%;
  justify-content: center;
  width: 85%;
`;


export const Date = styled('h3')`
  font-family: 'South', serif;
  font-size: 14rem;
  font-weight: 400;
  line-height: 1.1;
  color: #BCB7A5;
  margin: 0 0 0 0;
  padding: 0;
  align-self: flex-start;
`;
export { globalStyles };
export const DateAndNameContainer = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-left: 20%;
  margin-top: 1%;
`;

