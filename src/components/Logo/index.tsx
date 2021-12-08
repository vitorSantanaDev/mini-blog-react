import React from "react";
import * as S from "./styles";
import LogoImage from "../../assets/logo.svg";

const Logo: React.FC = () => {
  return (
    <S.LogoWrapper>
      <img src={LogoImage} alt="Logo do blog" />
    </S.LogoWrapper>
  );
};

export default Logo;
