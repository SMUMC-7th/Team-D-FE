import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import Button from "./../components/Button";
import PlantModal from "./../components/PlantModal";
import PlantModalMain from "./../components/PlantModalMain";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    74.72% 74.72% at 50% 51.71%,
    #ffffff 0%,
    #ffffff 20.4%,
    #d4e2de 31.9%,
    #cdddd8 34.9%,
    #bccdc8 52.4%,
    #89b9aa 76.9%,
    #6bad99 87.4%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  p {
    margin: 0;
  }
`;

const TopBox = styled.div`
  width: 100%;
  height: 20vh;
  margin-top: 20px;

  font-family: "GowunBatang-Regular";
  font-size: 40px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 2px solid #f2f2f26b;

  img {
    width: 200px;
    height: auto;
    object-fit: cover;
  }
  padding-bottom: 20px;
`;

const TopBoxHeader = styled.p`
  font-family: "Gowun Batang";
`;

const TopNotationBox = styled.div`
  position: absolute;
  right: 1vw;
  top: 25vh;
  width: 350px;
  height: 40px;
  background-color: white;
  border-radius: 10px;
  font-family: "GangwonEdu_OTFBoldA";
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  span {
    color: #be0d0d;
    font-weight: 600;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
`;

const SideLeftBox = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Gowun Batang";
`;

const SideLeftBoxTop = styled.div`
  margin-top: 20px;
  font-size: 35px;
  letter-spacing: 1em; /* 글자 간격 1em */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 20%;

  color: white;
  span {
    position: relative;
    left: 15px;
  }
`;

const SideLeftBoxBot = styled.ul`
  padding: 40px 10px;
  position: relative;
  li {
    margin: 10px 0;
    font-size: 26px;
  }
`;

const SideRightBox = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  gap: 20px;
`;

const MainBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 300px;
  }
`;

const ProgressBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  progress {
    width: 100%;
    margin-bottom: 10px;
    appearance: none; // 아래 css 적용을 위해서 꼭 필요

    &::-webkit-progress-bar {
      background: #f0f0f0;
      border-radius: 12px;
      border: 1px solid #eeeeee;
      height: 28px;
      width: 100%;
      overflow: hidden;
    }

    &::-webkit-progress-value {
      background: #abd2a9;
      border-radius: 0px;
      height: 28px;
      width: 48px;
    }
  }
`;

const ProgressLabelBox = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  font-size: 20px;
  margin-top: 20px;
`;

const PlantPage = () => {
  const [isProgressModalOpen, setIsProgressModalOpen] = useState(false);
  const [isTIPModalOpen, setIsTIPModalOpen] = useState(false);

  const handleProgressModalToggle = () => {
    setIsProgressModalOpen(!isProgressModalOpen);
  };

  const handleTIPModalToggle = () => {
    setIsTIPModalOpen(!isTIPModalOpen);
  };

  return (
    <Container>
      <TopBox>
        <img src="/plant_top_deco.png" alt="plant" />
        <TopBoxHeader>D Team 식물 현황</TopBoxHeader>
        <TopNotationBox>
          <AiOutlineExclamationCircle />
          <p>
            다음 성장까지 <span>{2}</span> 개의 TASK 가 남았어요.
          </p>
        </TopNotationBox>
      </TopBox>
      <MainContainer>
        <SideLeftBox>
          <SideLeftBoxTop>
            <span>PLANT</span>
            <span>INFO</span>
          </SideLeftBoxTop>
          <SideLeftBoxBot>
            <li>식물의 종류 : {"매화"}</li>
            <li>현 상태 : {"씨앗"}</li>
          </SideLeftBoxBot>
        </SideLeftBox>
        <MainBox>
          <img src="/seed.png" alt="plant" />
          <ProgressBox>
            <progress value={0.7} />
            <ProgressLabelBox>
              <p>{"씨앗"}</p>
              <p>{"새싹"}</p>
            </ProgressLabelBox>
          </ProgressBox>
        </MainBox>
        <SideRightBox>
          <ButtonBox>
            <Button
              bcg={"#E8C3D1"}
              textColor={"#575252"}
              fontSize={"17px"}
              borderRadius={"10px"}
              width={"170px"}
              height={"70%"}
              content={"전체 성장 과정 보기"}
              fontFamily={"EliceDigitalBaeum-Bd"}
              onClickHandler={handleProgressModalToggle}
            />
            <Button
              bcg={"#FFECEC"}
              textColor={"#DE8585"}
              fontSize={"40px"}
              borderRadius={"30px"}
              width={"100px"}
              height={"70%"}
              content={"TIP!"}
              fontFamily={"Cafe24Shiningstar"}
              onClickHandler={handleTIPModalToggle}
            />
          </ButtonBox>
          {isProgressModalOpen && !isTIPModalOpen && (
            <PlantModal>
              <PlantModalMain></PlantModalMain>
              <Button
                bcg={"#FFECEC"}
                textColor={"#DE8585"}
                fontSize={"40px"}
                borderRadius={"30px"}
                width={"100px"}
                height={"70%"}
                content={"TIP!"}
                fontFamily={"Cafe24Shiningstar"}
                onClickHandler={handleProgressModalToggle}
              ></Button>
            </PlantModal>
          )}
          {!isProgressModalOpen && isTIPModalOpen && (
            <PlantModal>
              <PlantModalMain></PlantModalMain>
              <Button
                bcg={"#FFECEC"}
                textColor={"#DE8585"}
                fontSize={"40px"}
                borderRadius={"30px"}
                width={"100px"}
                height={"70%"}
                content={"TIP!"}
                fontFamily={"Cafe24Shiningstar"}
                onClickHandler={handleTIPModalToggle}
              ></Button>
            </PlantModal>
          )}
        </SideRightBox>
      </MainContainer>
    </Container>
  );
};

export default PlantPage;
