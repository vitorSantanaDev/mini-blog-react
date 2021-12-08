import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.gap1} ${({ theme }) => theme.spacing.gap3};
`;

export const HeaderNav = styled.nav`
  ul {
    display: flex;

    li {
      margin-left: ${({ theme }) => theme.spacing.gap3};

      a {
        display: inline-block;
        transition: ease-in-out 0.3s;
        padding: ${({ theme }) => theme.spacing.gap1};
        color: ${({ theme }) => theme.colors.whiteDark};

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`;
