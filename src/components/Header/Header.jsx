import React from 'react';
import { HeaderNav, HeaderWrap } from './Header.styled';
import { Text, Icon, HomeIcon, FilmIcon } from 'evergreen-ui';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderNav>
        <Link to="/">
          <Icon icon={HomeIcon} size={30} />{' '}
          <Text size={600} marginRight={30}>
            Home
          </Text>
        </Link>
        <Link to="/movies">
          <Icon icon={FilmIcon} marginRight={20} size={30} />
          <Text size={600}>Movies</Text>
        </Link>
      </HeaderNav>
    </HeaderWrap>
  );
};

export default Header;
