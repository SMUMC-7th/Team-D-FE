import { useEffect, useState } from "react";
import * as S from "./sidebar.styled";
import { authInstance } from "../../../api/norman/axiosInstance";
import { apiGetUserData } from "../../../api/norman/plantApis";

const Sidebar = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const getData = async () => {
      const userData = await apiGetUserData();
      console.log(userData);
      setUserInfo(userData);
    };

    getData();
  }, []);

  return (
    <S.Container>
      <S.Header>My page</S.Header>

      <S.ImgBox>
        <img src="/src/pages/jerry/profile_init.png" alt="" />
      </S.ImgBox>

      <S.ColumnWrapper>
        <S.RowWrapper>
          <S.ProfileText size="25px">
            {" "}
            {userInfo ? userInfo.userName : "대기중..."}
          </S.ProfileText>
          <S.ProfileEditBtn>Edit</S.ProfileEditBtn>
        </S.RowWrapper>
        <S.ProfileText> {userInfo ? userInfo.mbti : "대기중..."}</S.ProfileText>
        <S.ProfileText> {userInfo ? userInfo.role : "대기중..."}</S.ProfileText>
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
