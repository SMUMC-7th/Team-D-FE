import styled from "styled-components";
import TaskBox from "./TaskBox";

const Background = styled.div`
  width: 100%;
  height: 650px;
  border-radius: 20px;
  background-color: white;
  position: relative;
  z-index: 1;
  overflow-y: auto;
  overflow-x: hidden;
`;
const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  border-right: 0.5px solid #b2b2b2;
  position: absolute;
  z-index: 2;
`;

const HeaderCellBox = styled.div`
  display: flex;
  width: 100%;
`;

const HeaderCell = styled.div`
  min-width: 212px;
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
  height: 10vh;
  width: ${(props) => (props.isTasksCell ? "20vw" : "")};
  overflow-y: ${(props) => (props.isTasksCell ? "auto" : "none")};
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
  align-items: center;
  height: 620px;
  gap: 15px;
  padding: 15px;
  border-right: 1px solid gray;

  svg {
    cursor: pointer;
    &:hover {
      transform: scale(1.14);
    }
  }
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
const plantBtn = styled.button`
  background: conic-gradient(
    from 77.05deg at 52.42% 60.94%,
    #8fdec6 0deg,
    #96dcc7 9.4deg,
    #b2e7ca 159.84deg,
    #eafee7 210.24deg,
    #dcf3da 242.64deg,
    #dffadc 266.04deg,
    #ddfcea 296.64deg,
    #8fdec6 360deg
  );
  font-family: "GowunBatang";
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  width: 174px;
  height: 41px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

const Span = styled.span`
  display: flex;
  flex-direction: row;
`;
export {
  Span,
  plantBtn,
  Background,
  Table,
  HeaderCellBox,
  HeaderCell,
  Cell,
  Circle,
  TeamTable,
  TaskBtn,
  TeamTasklist,
};
