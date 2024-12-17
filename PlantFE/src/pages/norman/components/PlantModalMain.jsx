import React from "react";
import styled from "styled-components";

const MainBox = styled.div`
  width: 85%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background-color: #ffecec;
  margin-bottom: 15px;
  border-radius: 20px;
  border: 3px solid #cdcdcd;
  overflow-x: hidden;
  overflow-y: auto;
`;
const MainTop = styled.div`
  width: 80%;
  height: ${(props) => (props.$type == "progress" ? "30%" : "25%")};
  padding: 10px;
  padding-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #191919;
  font-size: 26px;
  font-family: GangwonEdu_OTFBoldA;
  border-bottom: ${(props) =>
    props.$type == "progress" ? "2px solid #9C9C9C6B" : "none"};
`;
const MainCenter = styled.ul`
  width: 90%;
  height: 65%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  font-size: 23px;
  font-family: GangwonEdu_OTFBoldA;
  gap: 10px;

  li {
    width: 90%;
    text-align: center;
  }
`;

// api로 정보 불러들여야함

function PlantModalMain({ type }) {
  const projectName = "Mini project";
  console.log(type);
  return type == "progress" ? (
    <MainBox>
      <MainTop $type={type}>
        <div>
          {"["} {projectName} {"]"}
        </div>
        <div>식물의 진행 과정</div>
      </MainTop>
      <MainCenter>
        <div>1주차 : 씨앗</div>
        <div>2주차 : 새싹</div>
        <div>3주차 : 봉오리</div>
        <div>4주차 : 개화</div>
      </MainCenter>
    </MainBox>
  ) : (
    <MainBox $type={type}>
      <MainTop>다음 단계로 가려면?</MainTop>
      <MainCenter>
        <li>
          {"아무개"} 님이 {"["}
          {"Web 구현"}
          {"]"} 을 완성해야 성장할 수 있어요.
        </li>
      </MainCenter>
    </MainBox>
  );
}

export default PlantModalMain;
