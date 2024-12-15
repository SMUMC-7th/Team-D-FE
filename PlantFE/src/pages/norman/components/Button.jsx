import React from "react";
import { styled } from "styled-components";

const MyButton = styled.button`
  background-color: ${(props) => props.$bcg};
  color: ${(props) => (props.$textColor ? props.$textColor : "black")};
  font-size: ${(props) => props.$fontSize};
  border-radius: ${(props) => props.$borderRadius};
  border: none;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  cursor: pointer;
  font-family: ${(props) => props.$fontFamily};

  &:hover {
    transform: scale(1.02);
  }
`;

const Button = ({
  bcg,
  textColor,
  fontSize,
  borderRadius,
  content,
  width,
  height,
  fontFamily,
  onClickHandler,
}) => {
  return (
    <MyButton
      $bcg={bcg}
      $textColor={textColor}
      $fontSize={fontSize}
      $borderRadius={borderRadius}
      $width={width}
      $height={height}
      $fontFamily={fontFamily}
      onClick={() => onClickHandler()}
    >
      {content}
    </MyButton>
  );
};

export default Button;
