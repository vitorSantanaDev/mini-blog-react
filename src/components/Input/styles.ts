import styled from "styled-components";

export const InputElement = styled.input`
  height: 40px;
  border: none;
  min-width: 360px;
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing.gap1};
  color: ${({ theme }) => theme.colors.whiteLight};
  background-color: ${({ theme }) => theme.colors.blackLight};
`;
