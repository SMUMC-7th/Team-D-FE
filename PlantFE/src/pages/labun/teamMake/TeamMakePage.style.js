import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px;
  padding: 40px 20px;
  width: 628px;

  border-radius: 20px;
  border: 1px solid rgba(17, 59, 44, 0.43);
  background: #fff;

  div {
    display: flex;
  }
  .SmallText {
    width: 628px;
    display: flex;
    justify-content: right;
    margin-right: 70px;
    color: #000;
    text-align: center;
    font-family: "Roboto Serif";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 140.625%;
  }
  .TeamMemberBox {
    display: flex;
    align-items: flex-start;
    margin-top: 20px;
  }
`;
const TitleText = styled.p`
  color: #2b6039;
  text-align: center;
  font-family: "Roboto Serif";
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 140.625%;
  margin: 0 10px;
`;

const P = styled.p`
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: 1px solid #b2b2b2;
  background: #d1ede4;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

  color: #323232;
  text-align: right;
  font-family: "BMEULJIRO";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140.625%;
`;
const MemberBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 20px;
  p {
    color: #000;
    text-align: center;
    font-family: "BMEULJIRO";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140.625%;
  }
`;

const Container_Form_Input_Box = styled.div`
  flex-direction: column;
  justify-content: center;
`;
const InputBox = styled.div`
  margin-left: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .Date_Input {
    width: 150px;
    height: 33px;
    border-radius: 3px;
    border: 1px solid #b2b2b2;
    background: rgba(255, 250, 250, 0.25);
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

    color: #909090;
    text-align: center;
    font-family: "Roboto Serif";
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 140.625%;
  }
  p {
    color: #000;
    text-align: center;
    font-family: "EliceDigitalBaeum-Bd";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 140.625%;
  }
`;
const Input = styled.input`
  width: 260px;
  height: 50px;
  border: none;
  border-bottom: 2px solid #797979;
  color: #000;

  font-family: "EliceDigitalBaeum-Bd";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140.625%;
`;

const Button = styled.button`
  border-radius: 7px;
  border: 1px solid #9c9c9c;
  background: rgba(187, 212, 185, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 5px 10px;

  color: #4f4949;
  text-align: center;
  font-family: "Roboto Serif";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 140.625%;
`;
const PlusButton = styled.button`
  width: 270px;
  height: 34px;
  margin: 15px 0 0 20px;
  border-radius: 7px;
  border: 1px solid #b8b8b8;
  background: rgba(187, 212, 185, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const CreateSeedButton = styled.button`
  width: 537.908px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  background: linear-gradient(
    to left top,
    rgba(150, 220, 199, 0.91),
    rgba(178, 231, 202, 0.91),
    rgba(234, 254, 231, 0.91),
    rgba(220, 243, 218, 0.91)
  );
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  stroke-width: 0.3px;
  stroke: rgba(255, 255, 255, 0);
  border-radius: 10px;
  border: none;
  margin-top: 60px;

  color: #2b6039;
  text-align: center;
  font-family: Calistoga;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;

  .Plus {
    width: 21.235px;
    height: 33px;
  }
`;
const Hr = styled.hr`
  width: 550px;
  height: 1px;
  fill: #fff;
  stroke-width: 1px;
  stroke: rgba(17, 59, 44, 0.43);
`;

export {
  Container,
  TitleText,
  P,
  MemberBox,
  Container_Form_Input_Box,
  InputBox,
  Input,
  Button,
  PlusButton,
  CreateSeedButton,
  Hr,
};
