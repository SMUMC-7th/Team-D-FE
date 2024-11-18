import * as S from './ProjectTable.styled'

const ProjectTable = () => {
    return (
    <S.Background>
        <S.Table>
            <S.HeaderCell>프로젝트명</S.HeaderCell>
            <S.HeaderCell>기간</S.HeaderCell>
            <S.HeaderCell>나의 역할</S.HeaderCell>
            <S.HeaderCell>팀원</S.HeaderCell>
            <S.HeaderCell>완성도</S.HeaderCell>
            <S.HeaderCell>plant</S.HeaderCell>
            {/* 프로젝트명 */}
            <S.Cell size='22px'>Mini project</S.Cell>

            {/* 기간 */}
            <S.Cell size='22px'>2024.10.01~11.15</S.Cell>

            {/* 나의 역할 */}
            <S.Cell>flow chart 완성</S.Cell>

            {/* 팀원명 */}
            <S.Cell>송병호</S.Cell>

            {/* 완성도 */}
            <S.Cell size='30px'>78%</S.Cell>

            {/* plant */}
            <S.Cell>식물이름[매화] 식물현황</S.Cell>

        </S.Table>
    </S.Background>

    
    )
}

export default ProjectTable;