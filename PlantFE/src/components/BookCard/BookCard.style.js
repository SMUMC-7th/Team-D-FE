import styled from "styled-components";

const Container = styled.div`
  width: 230px;
  height: 230px;
  border-radius: 10px;
  border: 3px solid #415e4a;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;
`;

const DetailCard = styled.div`
  width: 484px;
  height: 295px;
  border-radius: 20px;
  border: 3px solid #8e8e8e;
  background: #ffecec;
  position: absolute;
  bottom: 50px;
  right: 100px;

  li {
    color: #000;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: HBIOS-SYS;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    p {
      width: 100px;
      height: 28px;
      border-radius: 7px;
      border: 1px solid #c1c1c1;
      background: #ffe100;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    button {
      width: 137px;
      height: 43px;
      border-radius: 10px;
      border: 1px solid #b8b8b8;
      background: #e8c3d1;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
  }
`;

export { Container, DetailCard };
