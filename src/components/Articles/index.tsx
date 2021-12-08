import React from "react";
import Container from "../Container";
import Post from "../Post";
import * as S from "./styles";

const Articles: React.FC = () => {
  return (
    <Container>
      <h1 style={{fontWeight: '300'}}>Articles</h1>
      <S.ArticlesWrapper>
        <Post title="tecnologia" subtitle="O guia definitivo sobre o mundo tech."/>
        <Post title="camêra" subtitle="Quais as melhores camêras para 2022."/>
        <Post title="cinema" subtitle="Homem aranha sem volta pra casa."/>
      </S.ArticlesWrapper>
    </Container>
  );
};

export default Articles;
