import { useState } from "react";
import Condition from "../../Condition/Condition";
import { ShowCondition } from "../../Condition/Condition.styled";
import Dropdown from "../dropdown/Dropdown";
import ProjectTable from "../projectTable/ProjectTable";
import Sidebar from "../sidebar/Sidebar";
import * as S from "./MyPage.styled";
import TaskModal from "../modal/TaskModal";

const MyPage = () => {
  const [selectedView, setSelectedView] = useState(true);
  //true면 project테이블, false면 teamlist테이블 보이기
  const [isModal, setIsModal] = useState(false);

  // console.log(selectedView, setSelectedView);
  // console.log(isModal);

  return (
    <S.Container>
      <S.Sidebar>
        <Sidebar />
      </S.Sidebar>
      <S.Line />
      <S.Main>
        <S.SortBtnLst>
          <Dropdown />
        </S.SortBtnLst>
        <S.ConditionBar>
          <Condition
            selectedView={selectedView}
            setSelectedView={setSelectedView}
          />
        </S.ConditionBar>
        <S.MainContentBox>
          <ProjectTable
            selectedView={selectedView}
            setSelectedView={setSelectedView}
            isModal={isModal}
            setIsModal={setIsModal}
          />
        </S.MainContentBox>
        {isModal ? (
          <TaskModal isModal={isModal} setIsModal={setIsModal} />
        ) : null}
      </S.Main>
    </S.Container>
  );
};

export default MyPage;
