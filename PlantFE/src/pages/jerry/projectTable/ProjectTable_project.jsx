import * as S from "./ProjectTable.styled";
import { CiStar } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";

const ProjectTable_project = () => {
  return (
    <>
      {/* 프로젝트명 */}
      <S.Cell size="22px">
        <CiStar /> Mini project
      </S.Cell>

      {/* 기간 */}
      <S.Cell size="22px">
        2024.10.01~11.15 <FaRegCalendarAlt />
      </S.Cell>

      {/* 나의 역할 */}
      <S.Cell>
        flow chart 완성 <IoIosRemoveCircle color="red" />
      </S.Cell>

      {/* 팀원명 */}
      <S.Cell>
        송병호 <IoIosRemoveCircle color="red" />
      </S.Cell>

      {/* 완성도 */}
      <S.Cell size="30px">78%</S.Cell>

      {/* plant */}
      <S.Cell>식물이름[매화] 식물현황</S.Cell>
    </>
  );
};

export default ProjectTable_project;
