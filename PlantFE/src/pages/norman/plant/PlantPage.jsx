import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import Button from "./../components/Button";
import PlantModal from "./../components/PlantModal";
import PlantModalMain from "./../components/PlantModalMain";
import {
  apiGetProjectData,
  apiGetUserData,
} from "../../../api/norman/plantApis";
import { useParams } from "react-router-dom";

const PLANTLEVEL = {
  1: "씨앗",
  2: "새싹",
  3: "봉오리",
  4: "개화",
};

const PLANT_IMG_URLS = {
  1: "/seed.png",
  2: "/sprout.png",
  3: "/flower_bud.png",
  4: "/flower.png",
};

const PlantPage = () => {
  const { teamId } = useParams();
  // const plantData = useGetData();
  const [plantData, setPlantData] = useState(null);
  const [plantCurrentLevel, setPlantCurrentLevel] = useState(1);
  const [plantCurrentProgress, setPlantCurrentProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [nextLevelCount, setNextLevelCount] = useState(0);

  const [isProgressModalOpen, setIsProgressModalOpen] = useState(false);
  const [isTIPModalOpen, setIsTIPModalOpen] = useState(false);

  const handleProgressModalToggle = () => {
    setIsProgressModalOpen(!isProgressModalOpen);
    setIsTIPModalOpen(false);
  };

  const handleTIPModalToggle = () => {
    setIsTIPModalOpen(!isTIPModalOpen);
    setIsProgressModalOpen(false);
  };

  // 렌더링 시 프로젝트 상세 정보 가져옴
  useEffect(() => {
    const getData = async () => {
      const apiRes = await apiGetProjectData(teamId);
      const currentLevel = Math.floor(apiRes.totalProgress / 25) + 1;
      console.log(apiRes);
      setPlantData(apiRes);
      setPlantCurrentLevel(currentLevel);
      setPlantCurrentProgress(((apiRes.totalProgress % 25) * 4) / 100);
      if (apiRes.totalProgress == 100) {
        setIsComplete(true);
      }
      // 34개 50% -> 다음 성장 지점은 75% -> 성장에 필요한 태스크 수 : (taskCount * currentLevel / 4) - (taskCount * 1/2)
      setNextLevelCount(
        Math.ceil(
          (apiRes.taskCount * currentLevel) / 4 - (apiRes.taskCount * 1) / 2
        )
      );
    };

    getData();
  }, []);

  return (
    <Container>
      <TopBox>
        <img src="/plant_top_deco.png" alt="plant" />
        <TopBoxHeader>
          {plantData && plantData.projectName} 식물 현황
        </TopBoxHeader>
        <TopNotationBox>
          <img src="/notibook.png" alt="book" />
          <p>
            다음 성장까지 <span>{nextLevelCount}</span> 개의 TASK 가 남았어요.
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
            <li>
              현 상태 :{" "}
              {plantData ? PLANTLEVEL[plantCurrentLevel] : "대기중..."}
            </li>
          </SideLeftBoxBot>
        </SideLeftBox>
        <MainBox>
          <img src={PLANT_IMG_URLS[plantCurrentLevel]} alt="plant" />
          <ProgressBox>
            <progress value={plantData ? plantCurrentProgress : 0} />
            <ProgressLabelBox>
              <p>{plantData ? PLANTLEVEL[plantCurrentLevel] : "대기중..."}</p>
              <p>
                {plantData ? PLANTLEVEL[plantCurrentLevel + 1] : "대기중..."}
              </p>
            </ProgressLabelBox>
            {isComplete && <CompleteText>complete!</CompleteText>}
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
              fontSize={"30px"}
              borderRadius={"30px"}
              width={"100px"}
              height={"70%"}
              content={"TIP!"}
              fontFamily={"GowunBatang-Regular"}
              onClickHandler={handleTIPModalToggle}
            />
          </ButtonBox>
          {isProgressModalOpen && !isTIPModalOpen && (
            <PlantModal>
              <PlantModalMain type={"progress"}></PlantModalMain>
              <Button
                bcg={"#FFECEC"}
                textColor={"#DE8585"}
                fontSize={"18px"}
                borderRadius={"10px"}
                width={"40%"}
                height={"10%"}
                content={"닫기"}
                fontFamily={"Roboto"}
                onClickHandler={handleProgressModalToggle}
              ></Button>
            </PlantModal>
          )}
          {!isProgressModalOpen && isTIPModalOpen && (
            <PlantModal>
              <PlantModalMain type={"tip"}></PlantModalMain>
              <Button
                bcg={"#FFECEC"}
                textColor={"#DE8585"}
                fontSize={"18px"}
                borderRadius={"10px"}
                width={"40%"}
                height={"10%"}
                content={"닫기"}
                fontFamily={"Roboto"}
                onClickHandler={handleTIPModalToggle}
              ></Button>
            </PlantModal>
          )}
        </SideRightBox>
      </MainContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 91vh;
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
  height: 20%;
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
  right: 1%;
  top: 23%;
  width: 430px;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  font-family: "GangwonEdu_OTFBoldA";
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  p {
    position: relative;
    top: 5%;
  }

  img {
    width: 40px;
    object-fit: cover;
  }

  span {
    color: #be0d0d;
    font-weight: 600;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  height: 80%;
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
  font-size: 40px;
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
    font-size: 35px;
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
  font-size: 28px;
  margin-top: 20px;
  font-family: HBIOS-SYS;
`;

const CompleteText = styled.div`
  position: relative;
  top: -110%;
  left: 50%;
  color: rgba(40, 115, 76, 1);
  font-family: "EliceDigitalBaeum-Bd";
  font-size: 28px;
  font-weight: 400;
  line-height: 50.68px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export default PlantPage;
