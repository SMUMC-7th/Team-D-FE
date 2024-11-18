import React from "react";
import { styled } from "styled-components";
import LandingFirstBox from "./../components/LandingFirstBox";
import LandingSecondBox from "../components/LandingSecondBox";
import LandingThirdBox from "../components/LandingThirdBox";
import LandingFourthBox from "../components/LandingFourthBox";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LandingPage = () => {
  return (
    <Container>
      <LandingFirstBox />
      <LandingSecondBox />
      <LandingThirdBox />
      <LandingFourthBox />
    </Container>
  );
};

export default LandingPage;
