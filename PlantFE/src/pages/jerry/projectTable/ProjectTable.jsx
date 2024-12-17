import * as S from "./ProjectTable.styled";
import ProjectList from "./ProjectList";
import TeamList from "./TeamList";

const ProjectTable = ({ selectedView, isModal, setIsModal, projectList }) => {
  console.log(projectList);
  return (
    <>
      <S.Background>
        {selectedView ? (
          <S.Table>
            <S.HeaderCell>프로젝트명</S.HeaderCell>
            <S.HeaderCell>기간</S.HeaderCell>
            <S.HeaderCell>나의 역할</S.HeaderCell>
            <S.HeaderCell>팀원</S.HeaderCell>
            <S.HeaderCell>완성도</S.HeaderCell>
            <S.HeaderCell>plant</S.HeaderCell>
            {projectList &&
              projectList?.map((item, idx) => (
                <ProjectList key={idx} {...item} />
              ))}
          </S.Table>
        ) : (
          <S.Table>
            <TeamList
              isModal={isModal}
              setIsModal={setIsModal}
              projectList={projectList}
            />
          </S.Table>
        )}
      </S.Background>
    </>
  );
};

export default ProjectTable;
