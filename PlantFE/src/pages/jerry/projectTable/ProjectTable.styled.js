import styled from "styled-components";
import TaskBox from "./TaskBox";

const Background = styled.div`
  height: 650px;
  border-radius: 20px;
  background-color: white;
  position: relative;
  z-index: 1;
`;
const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  border-right: 0.5px solid #b2b2b2;
  position: absolute;
  z-index: 2;
`;

const HeaderCell = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-weight: bold;
  padding: 10px;
  border-bottom: 2px solid #b2b2b2;
  font-family: Roboto Serif;
  font-size: ${(props) => props.fontSize || "25px"};
  font-weight: 400;
  line-height: 35.16px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const Cell = styled.div`
  display: flex;
  flex-direction: ${(props) => props.row || "row"};
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #b2b2b2;
  // &:not(:last-child) {
  //     border-right: 1px solid #ccc; /* 각 셀의 오른쪽에 세로선을 추가 */
  // }

  font-family: "Roboto Serif", serif;
  font-size: ${(props) => props.size || "20px"};
  font-weight: 400;
  line-height: 30.94px;
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
const TeamTable = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* overflow-x: scroll; */
`;
const TeamTasklist = styled.div`
  display: flex;
  flex-direction: column;
  height: 620px;
  gap: 15px;
  padding: 15px;
  border-right: 1px solid gray;
`;
const TaskBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 72px;
  background-color: ${(props) => props.backgroundColor || "#FFECEC"};
  border: 1px solid #9f9f9f;
  border-radius: 8px;
  gap: 15px;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

export {
  Background,
  Table,
  HeaderCell,
  Cell,
  Circle,
  TeamTable,
  TaskBtn,
  TeamTasklist,
};
