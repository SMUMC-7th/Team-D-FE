import * as S from "./MyPage.styled";
import React from "react";

const MyPage = () => {
  return(
  <S.Container>
    <S.Sidebar>사이드바 마이페이지</S.Sidebar>
    <S.Line/>
    <S.Main>
      <S.SortBtnLst>진행중버튼 / 기한순 버튼</S.SortBtnLst>
      <S.ConditionBar>완료 진행중 시작안함 토글버튼</S.ConditionBar>
      <S.MainContentBox>아 도표 어케 만들지</S.MainContentBox>
    </S.Main>
  </S.Container>

  ) 
  
};

export default MyPage;
