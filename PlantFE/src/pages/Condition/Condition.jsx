import * as S from "./Condition.styled";
import { CiViewList } from "react-icons/ci";
import { BsPersonLinesFill } from "react-icons/bs";
import { useState } from "react";

const Condition = ({ selectedView, setSelectedView }) => {
  const [btnBcg, setBtnBcg] = useState(true);

  const projectTableHandle = (prop) => {
    if (prop == true) {
      // console.log("condition btn1");
      setBtnBcg(false);
      setSelectedView(false);
    } else {
      // console.log("condition btn2");
      setBtnBcg(true);
      setSelectedView(true);
    }
  };

  return (
    <S.RowWrapper>
      <S.Circle color="#31E25A;" />
      <S.ShowCondition>완료</S.ShowCondition>
      <S.Circle color="#FFA774;" />
      <S.ShowCondition>진행중</S.ShowCondition>
      <S.Circle />
      <S.ShowCondition>시작 안 함</S.ShowCondition>
      <div>
        <S.Button
          bcg={btnBcg ? "0.69" : null}
          onClick={() => projectTableHandle(false)}
        >
          <CiViewList style={{ width: "100%", height: "100%" }} />
        </S.Button>
        <S.Button
          bcg={btnBcg ? null : "0.69"}
          onClick={() => projectTableHandle(true)}
        >
          <BsPersonLinesFill style={{ width: "100%", height: "100%" }} />
        </S.Button>
      </div>
    </S.RowWrapper>
  );
};
export default Condition;
