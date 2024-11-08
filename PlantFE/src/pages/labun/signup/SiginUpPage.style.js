import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
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
  background: rgba(187, 212, 185, 0.25);
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
`;
const Input = styled.input`
  width: 346px;
  height: 32px;
  border: none;
  border-bottom: 2px solid #6bad99;
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
  border-radius: 5px;
  border: 1px solid #979797;
  background: rgba(187, 212, 185, 0.25);

  color: #3b3b3b;
  text-align: center;
  font-family: "Roboto Serif";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 140.625%;
`;
const SignUpButton = styled.button`
  width: 537.908px;
  height: 64px;
  background: rgba(32, 73, 28, 0.91);
  stroke-width: 1px;
  stroke: rgba(115, 167, 131, 0.55);
  border-radius: 10px;
  margin-top: 60px;

  color: #d3e0d1;
  text-align: center;
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: rgba(122, 187, 141, 0.55);
  font-family: "Red Hat Display";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
