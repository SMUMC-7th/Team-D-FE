import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  width: 628px;
  height: 870px;
  border-radius: 20px;
  border: 1px solid rgba(17, 59, 44, 0.43);
  background: #fff;

  div {
    display: flex;
  }

  .leaf {
    width: 84px;
    height: 67px;
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
  height: 21px;
  flex-shrink: 0;
  border: none;
`;
const Button = styled.button`
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
