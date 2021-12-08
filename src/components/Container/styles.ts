import styled from "styled-components";

export const ContainerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  padding: ${({ theme }) => theme.spacing.gap1} ${({ theme }) => theme.spacing.gap3};
`