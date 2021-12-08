import React from "react"
import * as S from "./styles"

const Container: React.FC = ({ children }) => {
  return (
    <S.ContainerWrapper>{children}</S.ContainerWrapper>
  )
}

export default Container