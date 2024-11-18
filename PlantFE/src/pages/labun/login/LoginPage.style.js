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
    gap: 20px;
    padding: 0 20px;
  }
  .Container_InputBox {
    width: 518px;
    padding-bottom: 10px;
    border-bottom: 3px solid #408954;
    margin-bottom: 40px;
  }

  .leaf {
    width: 84px;
    height: 67px;
    fill: #6bad99;
    stroke-width: 1px;
    stroke: rgba(255, 255, 255, 0.23);

    margin: 80px;
  }
  .Container_InputIcon {
    width: 33px;
    height: 33px;
    fill: #2b6039;
  }
`;
const SearchID_PW = styled.div`
  justify-content: right;
  text-align: center;
  gap: 5px;
  color: #808080;
  text-align: center;
  font-family: "Roboto Serif";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140.625%; /* 28.125px */
`;

const Hr = styled.hr`
  width: 518px;
  height: 3px;
  background: #408954;
`;
const Input = styled.input`
  width: 344px;
  height: 40px;
  flex-shrink: 0;
  border: none;

  color: rgba(105, 104, 104, 0.87);
  font-family: "Gowun Batang";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 140.625%;
`;
const Button = styled.button`
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

const Signup = styled.div`
  gap: 5px;
  display: flex;
  align-items: center;

  p {
    color: #808080;
    text-align: center;
    font-family: "Roboto Serif";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140.625%; /* 28.125px */
  }
  .Signup_text {
    color: #408954;
    text-align: center;
    font-family: "Roboto Serif";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140.625%; /* 28.125px */
  }
`;

export { Container, Hr, Button, Input, SearchID_PW, Signup };
