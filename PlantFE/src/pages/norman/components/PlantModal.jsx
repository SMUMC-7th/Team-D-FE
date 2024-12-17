import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f6cfcf;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

function PlantModal({ children }) {
  console.log(children);

  return <Container>{children}</Container>;
}

export default PlantModal;
