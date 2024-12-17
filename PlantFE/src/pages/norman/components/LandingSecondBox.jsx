import React from "react";
import styled from "styled-components";

function LandingSecondBox() {
  return (
    <Container>
      <ScrollBox>
        {/* <ScrollBox1TextImg /> */}
        <p>더욱 완벽한 당신의 팀을 만들기 위해</p>
        <ScrollBox1TableImg />
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
    font-family: "GowunBatang-Regular";
    font-size: 4.5vw;
    /* font-weight: 400; */
    color: white;
    margin-bottom: 20px;
    /* font-weight: bold; */
    position: relative;
    left: -10vw;
  }
`;

const ScrollBox1TableImg = styled.img`
  background-image: url("/landing2.webp");
  background-repeat: no-repeat; // background-image가 컨테이너를 가득 채우지 못할 경우에도 반복하지 않는다.
  background-size: cover; // 사이즈가 container에 맞지 않아도 꽉 차도록 채운다.
  background-position: center; // background-image가 컨테이너에 가운데로 오도록 한다.
  width: 73%;
  height: 70vh;
  position: relative;
  left: -3vw;
  top: 5vh;
  border-radius: 40px;
  filter: blur(1px);
`;

export default LandingSecondBox;
