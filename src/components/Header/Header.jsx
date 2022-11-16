import React from 'react';
import { HeaderNav, HeaderWrap, StyledLink } from './Header.styled';
import { Text, Icon, HomeIcon, FilmIcon } from 'evergreen-ui';
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderNav>
        <StyledLink to="/">
          <Icon icon={HomeIcon} size={30} />{' '}
          <Text size={600} marginRight={30}>
            Home
          </Text>
        </StyledLink>
        <StyledLink to="/movies">
          <Icon icon={FilmIcon} marginRight={20} size={30} />
          <Text size={600}>Movies</Text>
        </StyledLink>
      </HeaderNav>
    </HeaderWrap>
  );
};

export default Header;
