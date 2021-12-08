import React from "react";
import Post from "../Post";
import * as S from "./styles";

const Articles: React.FC = () => {
  return (
    <S.ArticlesWrapper>
      <h1>Articles</h1>
      <Post />
    </S.ArticlesWrapper>
  );
};

export default Articles;
