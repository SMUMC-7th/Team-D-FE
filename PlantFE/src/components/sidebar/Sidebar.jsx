import * as S from './sidebar.styled'

const Sidebar = () => {
    return(
        <S.Container>
            <S.Header>My page</S.Header>
            <S.Profile>
                
                <img src="/pages/jerry/profile_init.png" alt="ㅠ" />
            
            </S.Profile>
            <S.Line></S.Line>
            <S.TextLst>
                <S.NavText>나의 식물도감</S.NavText>
                <S.NavText>프로젝트 관리</S.NavText>
                <S.NavText>나의 캘린더</S.NavText>
                <S.NavText>내 정보</S.NavText>
                <S.NavText>Goal 등록</S.NavText>
                <S.NavText>회원 탈퇴</S.NavText>
            </S.TextLst>
            
        </S.Container>
    )
}

export default Sidebar;