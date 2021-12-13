import styled from "styled-components";

export const PostWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing.gap2};
`;

export const PostContent = styled.div`
  h5 {
    font-weight: 300;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.blueLight};
    font-size: ${({ theme }) => theme.typograph.h5};
  }

  h3 {
    font-weight: 300;
    margin: ${({ theme }) => theme.spacing.gap1} 0;
    font-size: ${({ theme }) => theme.typograph.h4};
  }

  p {
    text-align: justify;
    color: ${({ theme }) => theme.colors.gray4};
    font-size: ${({ theme }) => theme.typograph.p};
  }
`;

export const PostProfileData = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.gap2};
  margin-bottom: ${({ theme }) => theme.spacing.gap4};

  .imageProfile {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-right: ${({ theme }) => theme.spacing.gap2};
    background-color: ${({ theme }) => theme.colors.gray2};
  }

  h6 {
    font-weight: 300;
    color: ${({ theme }) => theme.colors.blueNormal};
    font-size: ${({ theme }) => theme.typograph.h6};
  }

  .dataProfile {
    color: ${({ theme }) => theme.colors.gray4};
    font-size: ${({ theme }) => theme.typograph.p};
  }
`;
