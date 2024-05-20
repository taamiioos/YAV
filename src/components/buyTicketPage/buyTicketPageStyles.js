import {styled} from "@mui/system";
import { globalStyles } from '../../styles/exportStyles';
import {Link} from "react-router-dom";

export const NavLink = styled(Link)`
  font-family: 'Helvetica', serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 148.6%;
  color: var(--black-03);
  text-decoration: none;
  border: none;
  background-color: #F3F1EA;

  &:hover {
    color: #A80B00;
  }

  &.selected {
    color: #A80B00;
  }

` ;
export const LinkContainer = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 5% 0 0 9%;
  gap: 1%;

`;
export const DateContainer = styled('div')`
  margin-top: 2%;
  max-height: 2390px;
  height: 100vh;
  display: flex;
  margin-left: auto;
  width: 45%;
  gap: 2%;

`;

export const Date = styled('h3')`
  font-family: 'South', serif;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.1;
  text-align: left;
  color: #BCB7A5;
  margin: 0 0 0 0;
  padding: 0;
  align-self: flex-start;


`;
export const Description = styled('h1')`
  font-family: 'Helvetica', serif;
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 400;
  line-height: 1.1;
  text-align: left;
  color: #A80B00;
  margin: 0 0 0 0;
  padding: 0;
  align-self: flex-start;
`;
export const Address = styled('h1')`
  font-family: 'Helvetica', serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.1;
  text-align: left;
  color: #202020;
  margin: 0 0 0 0;
  padding: 0;
  align-self: flex-start;
`;
export { globalStyles };

export const InfoContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0;
  max-height: 2390px;
  height: 100vh;
  width: 100%;
`;
export const TypeEvent = styled('h3')`
  font-family: 'South', serif;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.1;
  text-align: left;
  color: #A80B00;
  margin: 0 0 0 0;
  padding-right: 8%;
  align-self: flex-start;
`;

export const EventInfoContainer = styled('div')`
  display: flex;
  margin-top: 1%;
  flex-direction: column;
  gap: 2%;
  width: 45%;
`;

export const DateAndNameContainer = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
