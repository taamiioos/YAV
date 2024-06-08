import React, { useState, useEffect } from 'react';
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

const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
      <HeaderWrapper>
        <Container>
          <HeaderRow><Logo>YAV</Logo>
            <HeaderNavList>
              <HeaderNavListItem>
                <HeaderNavLink
                    to="/eventsPage"
                    className={activeLink === '/eventsPage' ? 'selected' : ''}
                >
                  Мероприятия
                </HeaderNavLink>
              </HeaderNavListItem>
              <HeaderNavListItem>
                <HeaderNavLink
                    to="/"
                    className={activeLink === '/' ? 'selected' : ''}
                >
                  Магазин
                </HeaderNavLink>
              </HeaderNavListItem>
              <HeaderNavListItem>
                <HeaderNavLink
                    to="/сlusterPage"
                    className={activeLink === '/сlusterPage' ? 'selected' : ''}
                >
                  Кластеры
                </HeaderNavLink>
              </HeaderNavListItem>
              <HeaderNavListItem>
                <HeaderNavLink
                    href="#!"
                    className={activeLink === '#!' ? 'selected' : ''}
                >
                  Мой аккаунт
                </HeaderNavLink>
              </HeaderNavListItem>
            </HeaderNavList>
          </HeaderRow>
        </Container>
      </HeaderWrapper>
  );
};

export default Header;
