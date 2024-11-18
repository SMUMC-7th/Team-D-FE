import React from "react";
import styled from "styled-components";
import { IoMenu } from "react-icons/io5";

const Container = styled.div`
  width: 100%;
  height: 9vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;

const Icon = styled(IoMenu)`
  font-size: 46px;
  color: #5d5d5d;
  cursor: pointer;
  position: absolute;
  top: 1vh;
  left: 2vw;

  &:hover {
    scale: 1.05;
  }
`;

const Header = () => {
  return (
    <Container>
      <Icon />
      PLANTEAM
    </Container>
  );
};

export default Header;
