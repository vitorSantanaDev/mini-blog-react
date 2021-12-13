import styled from "styled-components";

export const MainWrapper = styled.div`
  .container > h2 {
    font-weight: 400;
    font-size: ${({ theme }) => theme.typograph.h2};
  }
`

export const ArticlePostsWrapper = styled.div`
  display: grid;
  alingh-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
`