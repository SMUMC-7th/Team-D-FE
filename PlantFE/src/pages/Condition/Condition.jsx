import * as S from './Condition.styled'

const Condition = () => {
    return(
        <S.RowWrapper>
        <S.Circle color='#31E25A;'/><S.ShowCondition>완료</S.ShowCondition>
        <S.Circle color='#FFA774;'/><S.ShowCondition>진행중</S.ShowCondition>
        <S.Circle/><S.ShowCondition>시작 안 함</S.ShowCondition>
        </S.RowWrapper>
    )
}
export default Condition;