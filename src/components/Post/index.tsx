import React from "react";
import Container from "../Container";
import * as S from "./styles";

interface PostProps {
  title: string
  subtitle: string
}

const Post: React.FC<PostProps> = ({ title, subtitle }) => {
  return (
    <Container>
      <S.PostWrapper>
        <S.PostContent>
          <div className="imagePost"></div>
          <h5>{title}</h5>
          <h3>{subtitle}</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            sit, officiis commodi dicta cum est laborum! Ab quod praesentium sit
            quaerat pariatur aliquid assumenda porro! Optio corporis fugit
            ratione nam?
          </p>
        </S.PostContent>
        <S.PostProfileData>
          <div className="imageProfile"></div>
          <div className="dataProfile">
            <h6>Fulano de Tal</h6>
            <p>Aug 2, 2020 - 8 min read</p>
          </div>
        </S.PostProfileData>
      </S.PostWrapper>
    </Container>
  );
};

export default Post;
