import Condition from "../../Condition/Condition";
import { ShowCondition } from "../../Condition/Condition.styled";
import Dropdown from "../dropdown/Dropdown";
import ProjectTable from "../projectTable/ProjectTable";
import Sidebar from "../sidebar/Sidebar";
import * as S from "./MyPage.styled";


const MyPage = () => {
  return(
  <S.Container>
    <S.Sidebar>
      <Sidebar/>
    </S.Sidebar>
    <S.Line/>
    <S.Main>
      <S.SortBtnLst><Dropdown/></S.SortBtnLst>
      <S.ConditionBar><Condition/></S.ConditionBar>
      <S.MainContentBox><ProjectTable/></S.MainContentBox>
    </S.Main>
  </S.Container>
  ) 
};

export default MyPage;
