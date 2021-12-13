import React from "react"
import * as S from "./styles"

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <S.ContainerWrapper className={className}>{children}</S.ContainerWrapper>
  )
}

export default Container