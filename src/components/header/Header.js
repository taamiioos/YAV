import {
  Container,
  HeaderNavLink,
  HeaderNavList,
  HeaderNavListItem,
  HeaderRow,
  HeaderWrapper,
  Logo
} from "./headerStyles";
import { useLocation } from 'react-router-dom';

const navLinks = [
  {path: '/eventsPage', label: 'Мероприятия'},
  {path: '/', label: 'Магазин'},
  {path: '/clusterPage', label: 'Кластеры'},
  {path: '#!', label: 'Мой аккаунт'}
];

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'selected' : '';
  }

  return (
      <HeaderWrapper>
        <Container>
          <HeaderRow>
            <Logo>YAV</Logo>
            <HeaderNavList>
              {navLinks.map((link, index) => (
                  <HeaderNavListItem key={index}>
                    <HeaderNavLink
                        to={link.path}
                        className={isActive(link.path)}>
                      {link.label}
                    </HeaderNavLink>
                  </HeaderNavListItem>
              ))}
            </HeaderNavList>
          </HeaderRow>
        </Container>
      </HeaderWrapper>
  );
};

export default Header;
