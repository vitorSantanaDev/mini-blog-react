import React from "react";
import Container from "../Container";
import * as S from "./styles";

interface PostProps {
  title: string
  subtitle: string
  content: string
  author: string
  date: string
}

const Post: React.FC<PostProps> = ({ title, subtitle, content, author, date }) => {
  return (
    <Container>
      <S.PostWrapper>
        <S.PostContent>
          <div className="imagePost"></div>
          <h5>{title}</h5>
          <h3>{subtitle}</h3>
          <p>
            {content}
          </p>
        </S.PostContent>
        <S.PostProfileData>
          <div className="imageProfile"></div>
          <div className="dataProfile">
            <h6>{author}</h6>
            <p>{date}</p>
          </div>
        </S.PostProfileData>
      </S.PostWrapper>
    </Container>
  );
};

export default Post;
