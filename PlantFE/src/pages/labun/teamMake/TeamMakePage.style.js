import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  padding: 40px 20px;
  width: 628px;

  border-radius: 20px;
  border: 1px solid rgba(17, 59, 44, 0.43);
  background: #fff;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
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
  border-radius: 3px;
  border: 1px solid #b2b2b2;
  background: rgba(187, 212, 185, 0.25);
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

  color: #535353;
  text-align: right;
  font-family: "BM EULJIRO";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140.625%;
`;
const InputBox = styled.div`
  gap: 10px;
  margin-left: 20px;
`;
const Input = styled.input`
  width: 160px;
  height: 50px;
  border: none;
  border-bottom: 2px solid #6bad99;
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
const CreateSeedButton = styled.button`
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
  fill: #fff;
  stroke-width: 1px;
  stroke: rgba(17, 59, 44, 0.43);
`;

export {
  Container,
  TitleText,
  P,
  InputBox,
  Input,
  Button,
  CreateSeedButton,
  Hr,
};
