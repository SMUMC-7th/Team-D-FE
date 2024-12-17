import { useEffect, useState } from "react";
import Condition from "../../Condition/Condition";
import { ShowCondition } from "../../Condition/Condition.styled";
import Dropdown from "../dropdown/Dropdown";
import ProjectTable from "../projectTable/ProjectTable";
import Sidebar from "../sidebar/Sidebar";
import * as S from "./MyPage.styled";
import TaskModal from "../modal/TaskModal";
import { apiGetProjectListData } from "../apis/mypageApis";
import ProjectDropdown from "../dropdown/ProjectDropdown";

const MyPage = () => {
  const [selectedView, setSelectedView] = useState(true);
  //true면 project테이블, false면 teamlist테이블 보이기
  const [isModal, setIsModal] = useState(false);
  //모달창 여는 toggle상태 관리리
  const [projectList, setProjectList] = useState("");
  //getProject를 통해서 가져온 api의 데이터관리
  const [currentState, setcurrentState] = useState("A"); // dropdownProject로 props 전달
  useEffect(() => {
    const getData = async () => {
      const apiRes = await apiGetProjectListData("all");
      console.log("api", apiRes);
      setProjectList(apiRes);
    };
    getData();
  }, []);

  return (
    <S.Container>
      <S.Sidebar>
        <Sidebar />
      </S.Sidebar>
      <S.Line />
      <S.Main>
        <S.SortBtnLst>
          {selectedView ? (
            <Dropdown />
          ) : (
            <ProjectDropdown
              currentState={currentState}
              setcurrentState={setcurrentState}
            />
          )}
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
            projectList={projectList}
            currentState={currentState}
            setcurrentState={setcurrentState}
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
