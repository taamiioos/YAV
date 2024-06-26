import { styled } from '@mui/system';
import {Link} from "react-router-dom";
import { globalStyles } from '../../styles/exportStyles';

export const HeaderWrapper = styled("header")`
  width: 100%;
  height: 20%;
`;

export const Container = styled('div')`
  max-width: 100%;
  max-height: 20%;
  margin: 0 auto;
  padding: 0 8% 0 7.2%;
`;

export const HeaderRow = styled('div')`
  display: flex;
  column-gap: 9.125%;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled('div')`
  display: flex;
  align-items: center;
  margin-top: 0.2%;
  font-family: Inter, sans-serif;
  font-weight: 900;
  font-size: 3vw;
  line-height: 4.859375vw;
  letter-spacing: -0.15em;
  color: var(--red-03);
`;

export const HeaderNav = styled('nav')`

`;

export const HeaderNavList = styled('ul')`
  display: flex;
  column-gap: 6.703125%;
  align-items: center;
  list-style-type: none;
  margin-top: 2.734375%;
`;

export const HeaderNavListItem = styled('li')`
  white-space: nowrap;
`;

export const HeaderNavLink = styled(Link)`
  font-family: 'Helvetica',serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 148.6%;
  color: var(--black-03);
  text-decoration: none;
  &:hover {
    color: #9b0000;
  }

  &.selected {
    color: #9b0000;
  }
`;

export const HeaderNavLinkExternal = styled('a')`
  font-family: 'Helvetica', serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 148.6%;
  color: var(--black-03);
  text-decoration: none;
  &:hover {
    color: #9b0000;
  }

  &.selected {
    color: #9b0000;
  }
`;
export { globalStyles };