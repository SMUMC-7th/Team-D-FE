import * as S from "./Condition.styled";
import { CiViewList } from "react-icons/ci";
import { BsPersonLinesFill } from "react-icons/bs";
import { useState } from "react";

const Condition = () => {
  const [selectedView, setSelectedView] = useState("");
  const projectTableHandle = (state) => {
    setSelectedView(state);
  };

  return (
    <S.RowWrapper>
      <S.Circle color="#31E25A;" />
      <S.ShowCondition>완료</S.ShowCondition>
      <S.Circle color="#FFA774;" />
      <S.ShowCondition>진행중</S.ShowCondition>
      <S.Circle />
      <S.ShowCondition>시작 안 함</S.ShowCondition>
      <S.Button onClick={() => projectTableHandle(projectTable)}>
        <CiViewList style={{ width: "100%", height: "100%" }} />
      </S.Button>
      <S.Button onClick={() => projectTableHandle(teamTable)}>
        <BsPersonLinesFill style={{ width: "100%", height: "100%" }} />
      </S.Button>
    </S.RowWrapper>
  );
};
export default Condition;
