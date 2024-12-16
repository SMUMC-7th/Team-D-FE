import * as S from "./ProjectTable.styled";
import ProjectTable_project from "./ProjectTable_project";
import ProjectTable_teamlist from "./ProjectTable_teamlist";
const ProjectTable = () => {
  return (
    <>
      <S.Background>
        <S.Table>
          <S.HeaderCell>프로젝트명</S.HeaderCell>
          <S.HeaderCell>기간</S.HeaderCell>
          <S.HeaderCell>나의 역할</S.HeaderCell>
          <S.HeaderCell>팀원</S.HeaderCell>
          <S.HeaderCell>완성도</S.HeaderCell>
          <S.HeaderCell>plant</S.HeaderCell>
          <ProjectTable_project />
        </S.Table>
      </S.Background>
      <S.Background>
        <S.Table>
          {/* 나재호 Flow chart 완성 / Usecase 최종 / PPT1차 제작 */}
          <ProjectTable_teamlist />
        </S.Table>
      </S.Background>
    </>
  );
};

export default ProjectTable;
