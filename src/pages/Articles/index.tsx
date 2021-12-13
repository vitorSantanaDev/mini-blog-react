import React from "react";
import Container from "../../components/Container";
import * as S from "./styles";

const Articles: React.FC = () => {
  return (
    <Container>
      <h1 style={{fontWeight: '300'}}>Articles</h1>
      <S.ArticlesWrapper>
      </S.ArticlesWrapper>
    </Container>
  );
};

export default Articles;
