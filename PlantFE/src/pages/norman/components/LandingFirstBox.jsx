import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function LandingFirstBox() {
  const navigate = useNavigate();

  return (
    <Container>
      <MainBox>
        <img src="/landing.png" />
        <MainCenterBox>
          <MainCenterTextWrapper>
            <MainCenterBoxText>To make a better team,</MainCenterBoxText>
            <MainCenterBoxText $fontSize={"7vw"}>
              grow your plant
            </MainCenterBoxText>
          </MainCenterTextWrapper>
          <MainCenterTextWrapper>
            <MainCenterBoxTextBack>
              To make a better team,
            </MainCenterBoxTextBack>
            <MainCenterBoxTextBack $fontSize={"7vw"}>
              grow your plant
            </MainCenterBoxTextBack>
          </MainCenterTextWrapper>
          <ButtonBox>
            <button onClick={() => navigate("/login")}>sign in</button>
          </ButtonBox>
        </MainCenterBox>
      </MainBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MainBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: url("/landing.png");
  background-repeat: no-repeat; // background-image가 컨테이너를 가득 채우지 못할 경우에도 반복하지 않는다.
  background-size: cover; // 사이즈가 container에 맞지 않아도 꽉 차도록 채운다.
  background-position: center; // background-image가 컨테이너에 가운데로 오도록 한다. */
  width: 100%;
  height: 91vh;
  font-family: "Agbalumo";
  img {
    width: 100%;
    height: 91vh;
    object-fit: fill;
    /* object-fit: cover; */
    position: absolute;
  }
`;

const MainCenterBox = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* top: -10%; */
`;

const ButtonBox = styled.div`
  position: absolute;
  top: 120%;
  button {
    font-family: "Agbalumo";
    font-size: 2vw;
    width: 260px;
    min-height: 60px;
    margin-right: 20px;
    border-radius: 40px;
    border: none;
    box-shadow: inset 0 6px 5px rgba(0, 0, 0, 0.8);
    background: conic-gradient(
      from 77.05deg at 52.42% 60.94%,
      #8fdec6 0deg,
      #96dcc7 9.4deg,
      #b2e7ca 159.84deg,
      #eafee7 210.24deg,
      #dcf3da 242.64deg,
      #dffadc 266.04deg,
      #ddfcea 296.64deg,
      #8fdec6 360deg
    );
    cursor: pointer;
    &:hover {
      transform: scale(1.02);
    }
  }
`;
const MainCenterTextWrapper = styled.div`
  height: 300px;
`;

const MainCenterBoxText = styled.p`
  position: relative;
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "5vw")};
  font-weight: 600;
  margin: 0;
  /* color: #e4ffe4; */
  background-image: linear-gradient(178.6deg, #e3fff6 40.31%, #2e9a78 98.8%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  line-height: 1.4;
  z-index: 2;
`;
const MainCenterBoxTextBack = styled.p`
  position: relative;
  top: -97%;
  left: 1%;
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "5vw")};
  font-weight: 600;
  margin: 0;
  color: rgba(120, 120, 120, 1);
  line-height: 1.4;
  z-index: 1;
`;

export default LandingFirstBox;
