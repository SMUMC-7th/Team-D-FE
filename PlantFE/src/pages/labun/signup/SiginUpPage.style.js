import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px;
  padding: 40px 0;
  width: 628px;

  border-radius: 20px;
  border: 1px solid rgba(17, 59, 44, 0.43);
  background: #fff;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .TermsDiv {
    display: flex;
    align-items: flex-start;
    margin-top: 20px;

    p {
      margin: 0;
    }
  }
`;
const TitleText = styled.p`
  color: #2b6039;
  text-align: center;
  font-family: "Roboto Serif";
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 140.625%;
  margin: 0 10px;
`;
const Login = styled.div`
  gap: 5px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;

  p {
    color: #a6a6a6;
    text-align: center;
    font-family: "Roboto Serif";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 140.625%;
  }
  .Login_text {
    color: #414040;
    font-family: "Roboto Serif";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 140.625%;
  }
`;

const P = styled.p`
  width: 112px;
  height: 32px;
  border-radius: 3px;
  border: 1px solid #b2b2b2;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(138, 208, 186, 0.25) 49%,
    rgba(22, 180, 130, 0.25) 100%
  );
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;
  color: #505050;
  font-family: "Alike Angular";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 140.625%; /* 21.094px */
`;
const InputBox = styled.div`
  gap: 10px;
  margin-left: 20px;

  label {
    display: flex;
    gap: 5px;
    margin-right: 30px;
    color: #000;
    text-align: center;
    font-family: "Roboto Serif";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 140.625%;
  }
  .InputBox_Input {
    width: 170px;
    height: 30px;
    color: #000;
    text-align: left;
    font-family: "Gowun Batang";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 140.625%;
    border: none;
    border-bottom: 1px solid #d9d9d9;
  }
`;
const Input = styled.input`
  width: 346px;
  height: 32px;
  border: none;
  border-bottom: 2px solid #6bad99;

  color: #000;

  font-family: "Gowun Batang";
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 140.625%;
`;
const TermsInputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 400px;

  label {
    display: flex;
    align-items: center;
    color: #4e4e4e;
    text-align: center;
    font-family: "Roboto Serif";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 140.625%;
  }
  .TermsInputBox_Container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    a {
      color: #1d61f4;
      text-align: center;
      font-family: "Roboto Serif";
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 140.625%;
    }
  }
`;

const Button = styled.button`
  width: 70px;
  height: 22px;
  border-radius: 5px;
  border: 1px solid #979797;
  background: linear-gradient(
    to left top,
    rgba(150, 220, 199, 0.91),
    rgba(178, 231, 202, 0.91),
    rgba(234, 254, 231, 0.91),
    rgba(220, 243, 218, 0.91)
  );
  stroke-width: 1px;
  stroke: #a3a3a3;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  color: #3b3b3b;
  text-align: center;
  font-family: "Roboto Serif";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 140.625%;
  cursor: pointer;
`;
const SignUpButton = styled.button`
  width: 537.908px;
  height: 64px;

  background: linear-gradient(
    to left top,
    rgba(150, 220, 199, 0.91),
    rgba(178, 231, 202, 0.91),
    rgba(234, 254, 231, 0.91),
    rgba(220, 243, 218, 0.91)
  );
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  border: none;
  margin-top: 60px;
  margin-bottom: 30px;

  color: #799f83;
  text-align: center;
  font-family: Calistoga;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;
const Hr = styled.hr`
  width: 550px;
  height: 1px;
  flex-shrink: 0;
  background: #d9d9d9;
`;

export {
  Container,
  TitleText,
  Login,
  P,
  InputBox,
  Input,
  TermsInputBox,
  Button,
  SignUpButton,
  Hr,
};
