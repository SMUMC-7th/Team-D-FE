import * as S from "./sidebar.styled";

const Sidebar = () => {
  return (
    <S.Container>
      <S.Header>My page</S.Header>

      <S.ImgBox>
        <img src="/src/pages/jerry/profile_init.png" alt="" />
      </S.ImgBox>

      <S.ColumnWrapper>
        <S.RowWrapper>
          <S.ProfileText size="25px">나재호</S.ProfileText>
          <S.ProfileEditBtn>Edit</S.ProfileEditBtn>
        </S.RowWrapper>
        <S.ProfileText>ISFP</S.ProfileText>
        <S.ProfileText>웹/앱서비스 개발</S.ProfileText>
      </S.ColumnWrapper>
      <S.Line />
      <S.TextLst>
        <S.NavText>나의 식물도감</S.NavText>
        <S.NavText>프로젝트 관리</S.NavText>
        <S.NavText>나의 캘린더</S.NavText>
        <S.NavText>내 정보</S.NavText>
        <S.NavText>Goal 등록</S.NavText>
        <S.NavText>회원 탈퇴</S.NavText>
      </S.TextLst>
    </S.Container>
  );
};

export default Sidebar;
