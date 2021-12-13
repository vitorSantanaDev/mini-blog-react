import React, { useEffect, useState } from "react";
import * as S from "./styles";
import api from "../../services/api";
import Post from "../../components/Post";
import Container from "../../components/Container";

interface Posts {
  category: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  id: string;
}

const Main: React.FC = () => {
  const [posts, setPosts] = useState<Posts[]>();

  useEffect(() => {
    async function handleAxios() {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    handleAxios();
  }, []);

  return (
    <S.MainWrapper>
      <Container className="container">
        <h2>Articles</h2>
        <S.ArticlePostsWrapper>
          {posts
            ? posts.map((post) => (
                <Post
                  key={post.id}
                  title={post.category}
                  subtitle={post.title}
                  content={post.description}
                  author={post.author}
                  date={post.date}
                />
              ))
            : null}
        </S.ArticlePostsWrapper>
      </Container>
    </S.MainWrapper>
  );
};

export default Main;
