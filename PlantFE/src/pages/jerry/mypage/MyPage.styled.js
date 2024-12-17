import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const Sidebar = styled.div`
  width: 20%;
`;

const Main = styled.div`
  width: 80%;
`;
const SortBtnLst = styled.div`
  margin: 40px;
  margin-bottom: 20px;
`;
const ConditionBar = styled.div`
  margin: 5px 40px;
`;
const MainContentBox = styled.div`
  margin: 0 30px;
  /* height: 70%; */
`;
const Line = styled.hr`
  margin: 0;
  padding: 0;
  color: white;
  height: 100%;
`;

export {
  Container,
  Sidebar,
  Main,
  SortBtnLst,
  ConditionBar,
  Line,
  MainContentBox,
};
