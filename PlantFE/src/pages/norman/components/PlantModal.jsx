import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 20vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f6cfcf;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px #00000040;
`;
const MainBox = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const MainTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const MainCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CloseButton = styled.button`
  width: 7vw;
  height: 4vh;
  background-color: white;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 10px;
`;

function PlantModal({ children }) {
  console.log(children);

  return (
    <Container>
      {/* <MainBox>
        <MainTop>{children[0]}</MainTop>  
        <MainCenter>{children[1]}</MainCenter>
      </MainBox>
      {isOpen &&<div>123</div>} */}
      {children}
      {/* <CloseButton>닫기</CloseButton> */}
    </Container>
  );
}

export default PlantModal;
