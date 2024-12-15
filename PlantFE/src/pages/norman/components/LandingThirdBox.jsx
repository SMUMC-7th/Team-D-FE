import React from "react";
import styled from "styled-components";

function LandingThirdBox() {
  return (
    <Container>
      <ScrollBox>
        <ScrollBox2ContentBox>
          <ScrollBox2ContentBoxWrapper>
            <p>캘린더별 일정 정리</p>
            <img src="/landing_calendar.png" />
          </ScrollBox2ContentBoxWrapper>
          <ScrollBox2ContentBoxWrapper>
            <img src="/landing_project_table.png" />
            <p>실시간 팀원 업무 현황 파악</p>
          </ScrollBox2ContentBoxWrapper>
        </ScrollBox2ContentBox>
        <ScrollBox2Footer>
          효율적인 프로젝트 관리를 도와줍니다.
        </ScrollBox2Footer>
      </ScrollBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ScrollBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);

  p {
    color: white;
    font-size: 24px;
    margin-bottom: 30px;
  }
`;

const ScrollBox2ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 70vh;
`;

const ScrollBox2Footer = styled.div`
  margin-top: 50px;
  font-family: "Cafe24Oneprettynight";
  font-size: 4.5vw;
  color: white;
`;

const ScrollBox2ContentBoxWrapper = styled.div`
  font-size: 22px;
  text-align: center;
  color: white;
  margin-right: 20px;
  img {
    background-image: url("/landing_calendar.png");
    background-repeat: no-repeat; // background-image가 컨테이너를 가득 채우지 못할 경우에도 반복하지 않는다.
    background-size: cover; // 사이즈가 container에 맞지 않아도 꽉 차도록 채운다.
    background-position: center; // background-image가 컨테이너에 가운데로 오도록 한다.
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  p {
    font-size: 1.5vw;
  }
`;

export default LandingThirdBox;
