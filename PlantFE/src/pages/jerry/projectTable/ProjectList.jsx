import { useEffect, useState } from "react";
import * as S from "./ProjectTable.styled";
import { CiStar } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";

const ProjectList = ({
  startDate,
  endDate,
  projectName,
  totalProgress,
  teamMembers,
  tasks,
}) => {
  const [isTaskProgress, setIsTaskProgress] = useState("");
  //task진행중/완료/시작 안 함에 따라서 circle색깔을 바꿔줘야되는데 역할의 갯수가
  //동적으로 바뀌는데 이에 대해서 상태관리 useState말고 어카죠

  // console.log(tasks); //projectList.tasks가 아니라 projectList[0].tasks[0].taskName 해야 task관련 배열이 뜬다

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();

    return `${year}.${month}.${day}`;
  };
  return (
    <>
      {/* 프로젝트명 */}
      <S.Cell>
        <CiStar /> {projectName}
      </S.Cell>

      {/* 기간 */}
      <S.Cell size="22px">
        {formatDate(startDate)}~{formatDate(endDate)} <FaRegCalendarAlt />
      </S.Cell>

      {/* 나의 역할 */}
      <S.Cell>
        {/* {console.log("1111111111", tasks)} */}

        {tasks &&
          tasks?.map((task, idx) => {
            <span key={idx}>
              <S.Circle />
              {task.taskName}
              <IoIosRemoveCircle color="red" />
            </span>;
          })}
      </S.Cell>

      {/* 팀원명 */}
      <S.Cell row="column">
        {teamMembers.map((item, idx) => (
          <span key={idx}>
            {item}
            <IoIosRemoveCircle color="red" />
          </span>
        ))}
      </S.Cell>

      {/* 완성도 */}
      <S.Cell size="30px">{totalProgress}%</S.Cell>

      {/* plant */}
      <S.Cell row="column">
        식물이름[매화] <S.plantBtn>식물현황</S.plantBtn>
      </S.Cell>
    </>
  );
};

export default ProjectList;
