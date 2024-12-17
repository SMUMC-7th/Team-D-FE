import styled from "styled-components";

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;

const ShowCondition = styled.div`
  font-family: Roboto Slab;
  font-size: 15px;
  font-weight: 500;
  line-height: 19.78px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;
const Circle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50px;
  background-color: ${(props) => props.color || "#FF3333"};
`;

const Button = styled.button`
  padding: 0;
  width: 38px;
  height: 36px;
  background-color: white;
  opacity: ${(props) => props.bcg || "none"};
  border: 1px solid lightgray;
`;

export { ShowCondition, Circle, RowWrapper, Button };
