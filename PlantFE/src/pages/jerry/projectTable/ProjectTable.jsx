import * as S from "./ProjectTable.styled";
import ProjectList from "./ProjectList";
import TeamList from "./TeamList";
import { apiGetProjectListData } from "../apis/mypageApis";
import { useEffect, useState } from "react";

const ProjectTable = ({ selectedView, isModal, setIsModal }) => {
  const [apiRes, setapiRes] = useState("");
  useEffect(() => {
    const getData = async () => {
      const apiRes = await apiGetProjectListData("all");
      console.log(apiRes);
      setapiRes(apiRes);
    };
    getData();
  }, []);
  console.log(apiRes[0]);
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
            {apiRes.map((item, idx) => (
              <ProjectList key={idx} {...item} />
            ))}
          </S.Table>
        ) : (
          <S.Table>
            <TeamList isModal={isModal} setIsModal={setIsModal} />
          </S.Table>
        )}
      </S.Background>
    </>
  );
};

export default ProjectTable;
