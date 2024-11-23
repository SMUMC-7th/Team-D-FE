import React from "react";
import styled from "styled-components";

function LandingFourthBox() {
  return (
    <Container>
      <ScrollBox>
        <ScrollBoxContentBox>
          <ScrollBoxContentBoxWrapper>
            <div>
              <p>
                목표를 이룰 때마다<br></br>
                자라는 식물을 키워보세요.
              </p>
            </div>
            <img src="/flower_white_bcg.jpg" />
          </ScrollBoxContentBoxWrapper>
        </ScrollBoxContentBox>
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
  height: 90vh;
  background-color: rgba(0, 0, 0, 0.8);
`;

const ScrollBoxContentBox = styled.div`
  width: 90%;
`;

const ScrollBoxContentBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-right: 20px;

  p {
    text-align: center;
  }
  div {
    width: 60%;
    font-family: "Cafe24Shiningstar";
    display: flex;
    flex-direction: column;
    font-size: 6vw;
    margin-right: 20px;
  }
  img {
    background-image: url("/flower_white_bcg.jpg");
    background-repeat: no-repeat; // background-image가 컨테이너를 가득 채우지 못할 경우에도 반복하지 않는다.
    background-size: cover; // 사이즈가 container에 맞지 않아도 꽉 차도록 채운다.
    background-position: center; // background-image가 컨테이너에 가운데로 오도록 한다.
    width: 40%;
    height: 100%;
    border-radius: 250px;
    position: relative;
    right: 0;
  }
`;

export default LandingFourthBox;
