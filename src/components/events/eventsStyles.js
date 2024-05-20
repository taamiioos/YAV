import { styled } from '@mui/system';
import {Link} from "react-router-dom";

export const EventListContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10%;
  max-width: 100%;
  margin: 0 auto;
  padding: 5% 10% 0 10%;
`;

export const EventContainer = styled('div')`
  display: flex;
  align-items: flex-start;
  column-gap: 2%;
`;

export const EventDescriptionContainer = styled('div')`
  margin-top: 34px;
  height: 450px;
  width: 820px;
  position: relative;
`;

export const EventTitle = styled("h2")`
  font-family: "South", serif;
  color: var(--black-03);
  font-weight: 400;
  font-size: 3rem;
  margin-bottom: 1%;
`;

export const EventDate = styled('p')`
  font-family: 'Helvetica', serif;
  color: var(--red-03);
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.5;
`;

export const EventText = styled("p")`
  font-family: 'Helvetica', serif;
  font-weight: 400;
  font-size: 1rem;
  color: var(--black-03);
  line-height: 1.3;
  position: absolute;
  bottom: 5%;
`;

export const EventDescriptionLink = styled('a')`
  font-family: 'Helvetica', serif;
  text-decoration: none;
  color: var(--black-03);
  font-weight: 600;
  font-size: 1.125rem;
  position: absolute;
  bottom: 1%;
`;

export const EventTicketsContainer = styled('div')`
  width: 20%;
`;

export const TicketsButton = styled('button')`
  background: var(--white-03);
  border-radius: 10px;
  border: none;
  width: 100%;
  padding:6%;
  margin-top: 45%;
`;

export const ButtonText = styled('span')`
  font-family: 'Helvetica', serif;
  font-style: italic;
  font-weight: 850;
  font-size: 1.125rem;
  color: var(--red-03);
  
`;

export const TicketsLeftContainer = styled('div')`
  color: var(--black-03);
  font-family: 'Helvetica',serif;
  font-weight: 400;
  font-size: 1rem;
  display: flex;
  align-items: center;
  column-gap: 1%;
  justify-content: flex-end;
`;

export const TicketsLeftText = styled('p')`
  font-weight: 800;
`;

export const NavLink = styled(Link)`
  font-family: 'Helvetica', serif;
  font-style: italic;
  font-weight: 850;
  font-size: 1.125rem;
  color: var(--red-03);
  line-height: 148.6%;
  text-decoration: none;
  border: none;
  background-color: #FDFDFD;

  &:hover {
    color: #A80B00;
  }

  &.selected {
    color: #A80B00;
  }

` ;