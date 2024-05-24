import React from 'react';
import {
  Container,
  HeaderNav,
  HeaderNavLink, HeaderNavLinkExternal,
  HeaderNavList,
  HeaderNavListItem,
  HeaderRow,
  HeaderWrapper,
  Logo
} from "./headerStyles";

const Header = () => {
  return (
      <HeaderWrapper>
        <Container>
          <HeaderRow>
            <Logo>YAV</Logo>
            <HeaderNav>
              <HeaderNavList>
                <HeaderNavListItem>
                  <HeaderNavLink to="/eventsPage">Мероприятия</HeaderNavLink>
                </HeaderNavListItem>
                <HeaderNavListItem>
                  <HeaderNavLink to="/">Магазин</HeaderNavLink>
                </HeaderNavListItem>
                <HeaderNavListItem>
                  <HeaderNavLink to="/сlusterPage">Кластеры</HeaderNavLink>
                </HeaderNavListItem>
                <HeaderNavListItem>
                  <HeaderNavLinkExternal href="#!">Мой аккаунт</HeaderNavLinkExternal>
                </HeaderNavListItem>
              </HeaderNavList>
            </HeaderNav>
          </HeaderRow>
        </Container>
      </HeaderWrapper>
  );
};
export default Header;

