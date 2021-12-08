import React from "react";
import Container from "../Container";
import Input from "../Input";
import Logo from "../Logo";
import * as S from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
    <S.HeaderWrapper>
        <Logo />
        <Input type="text" name="search"placeholder="Search"/>
        <S.HeaderNav>
          <ul>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#content">Content</a></li>
          </ul>
        </S.HeaderNav>
    </S.HeaderWrapper>
    </Container>
  );
};

export default Header;
